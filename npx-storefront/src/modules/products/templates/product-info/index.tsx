import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div id="product-info">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.3em] text-ui-fg-subtle">
          {product.type?.value && (
            <span className="rounded-full border border-ui-border-base bg-grey-5 px-3 py-1 text-[11px] font-semibold">
              {product.type.value}
            </span>
          )}
          {product.collection && (
            <LocalizedClientLink
              href={`/collections/${product.collection.handle}`}
              className="rounded-full border border-ui-border-base bg-grey-5 px-3 py-1 text-[11px] font-semibold"
            >
              {product.collection.title}
            </LocalizedClientLink>
          )}
        </div>
        <Heading
          level="h2"
          className="text-3xl leading-tight text-ui-fg-base"
          data-testid="product-title"
        >
          {product.title}
        </Heading>
        <Text
          className="text-sm text-ui-fg-subtle whitespace-pre-line"
          data-testid="product-description"
        >
          {product.description}
        </Text>
      </div>
    </div>
  )
}

export default ProductInfo
