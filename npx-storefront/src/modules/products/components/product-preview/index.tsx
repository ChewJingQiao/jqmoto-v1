import { Text } from "@medusajs/ui"
import { listProducts } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
  compact = false,
  showDescription = false,
  thumbnailSize = "full",
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  compact?: boolean
  showDescription?: boolean
  thumbnailSize?: "small" | "medium" | "large" | "full" | "square"
  region: HttpTypes.StoreRegion
}) {
  // const pricedProduct = await listProducts({
  //   regionId: region.id,
  //   queryParams: { id: [product.id!] },
  // }).then(({ response }) => response.products[0])

  // if (!pricedProduct) {
  //   return null
  // }

  const { cheapestPrice } = getProductPrice({
    product,
  })

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group">
      <div data-testid="product-wrapper">
        <div className="relative">
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size={thumbnailSize}
            isFeatured={compact ? true : isFeatured}
          />
          {showDescription && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-3 py-3 text-white">
              <Text className="text-sm font-semibold" data-testid="product-title">
                {product.title}
              </Text>
              <div className="mt-1 text-xs text-white">
                {cheapestPrice && (
                  <PreviewPrice price={cheapestPrice} className="text-white" />
                )}
              </div>
            </div>
          )}
        </div>
        {!showDescription && (
          <div className="flex txt-compact-medium mt-4 justify-between">
            <Text className="text-ui-fg-subtle" data-testid="product-title">
              {product.title}
            </Text>
            <div className="flex items-center gap-x-2">
              {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
            </div>
          </div>
        )}
      </div>
    </LocalizedClientLink>
  )
}
