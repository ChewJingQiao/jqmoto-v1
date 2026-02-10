import { listProducts } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import { HttpTypes } from "@medusajs/types"
import Product from "../product-preview"

type RelatedProductsProps = {
  product: HttpTypes.StoreProduct
  countryCode: string
}

export default async function RelatedProducts({
  product,
  countryCode,
}: RelatedProductsProps) {
  const region = await getRegion(countryCode)

  if (!region) {
    return null
  }

  const baseParams: HttpTypes.StoreProductListParams = {
    is_giftcard: false,
  }
  if (region?.id) {
    baseParams.region_id = region.id
  }

  const brandTagIds =
    product.tags
      ?.filter((tag) => tag.value?.toLowerCase() !== "brand")
      .map((tag) => tag.id)
      .filter(Boolean) || []

  const relatedByType = product.type_id
    ? await listProducts({
        queryParams: {
          ...baseParams,
          type_id: [product.type_id],
          limit: 12,
        },
        countryCode,
      }).then(({ response }) => response.products)
    : []

  const relatedByBrand =
    brandTagIds.length > 0
      ? await listProducts({
          queryParams: {
            ...baseParams,
            tag_id: brandTagIds,
            limit: 12,
          },
          countryCode,
        }).then(({ response }) => response.products)
      : []

  const merged = [...relatedByType, ...relatedByBrand].filter(
    (responseProduct) => responseProduct.id !== product.id
  )

  const uniqueMap = new Map(merged.map((p) => [p.id, p]))
  let products = Array.from(uniqueMap.values()).slice(0, 8)

  if (!products.length && product.collection_id) {
    products = await listProducts({
      queryParams: {
        ...baseParams,
        collection_id: [product.collection_id],
        limit: 12,
      },
      countryCode,
    }).then(({ response }) =>
      response.products.filter((p) => p.id !== product.id).slice(0, 8)
    )
  }

  if (!products.length) {
    return null
  }

  return (
    <div className="product-page-constraint">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-base-regular text-gray-600 mb-6">
          Related products
        </span>
        <p className="text-2xl-regular text-ui-fg-base max-w-lg">
          You might also want to check out these products.
        </p>
      </div>

      <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8">
        {products.map((product) => (
          <li key={product.id}>
            <Product region={region} product={product} thumbnailSize="square" />
          </li>
        ))}
      </ul>
    </div>
  )
}
