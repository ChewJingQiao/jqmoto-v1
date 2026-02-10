import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import { HttpTypes } from "@medusajs/types"

import ProductActionsWrapper from "./product-actions-wrapper"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
  images: HttpTypes.StoreProductImage[]
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
  images,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div
        className="content-container py-10 small:py-16 small:pr-16"
        data-testid="product-container"
      >
        <div className="grid grid-cols-1 gap-8 small:grid-cols-[1.1fr_0.9fr] small:gap-6">
          <div className="space-y-6 small:space-y-8 small:pr-2">
            <ImageGallery images={images} />
          </div>
          <div className="space-y-6 small:space-y-8 small:pl-6">
            <div className="rounded-2xl border border-ui-border-base bg-white p-6 shadow-sm">
              <ProductInfo product={product} />
              <div className="mt-6">
                <ProductTabs product={product} />
              </div>
            </div>
            <div className="rounded-2xl border border-ui-border-base bg-white p-6 shadow-sm">
              <ProductOnboardingCta />
              <div className="mt-6">
                <Suspense
                  fallback={
                    <ProductActions
                      disabled={true}
                      product={product}
                      region={region}
                    />
                  }
                >
                  <ProductActionsWrapper id={product.id} region={region} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="content-container my-16 small:my-32"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate
