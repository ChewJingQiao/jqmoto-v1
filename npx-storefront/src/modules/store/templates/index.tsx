import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import SortDropdown from "@modules/store/components/sort-dropdown"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import TypeDropdown from "@modules/store/components/type-dropdown"
import { listProductTypes } from "@lib/data/product-types"

import PaginatedProducts from "./paginated-products"

const StoreTemplate = async ({
  sortBy,
  page,
  typeId,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  typeId?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"
  const productTypes = await listProductTypes()

  return (
    <div className="py-6 content-container" data-testid="category-container">
      <div className="flex flex-col gap-4">
        <div className="text-2xl-semi">
          <h1 data-testid="store-page-title">All products</h1>
        </div>
        <div className="relative flex w-full flex-col gap-4 small:min-h-[52px]">
          <div className="small:absolute small:left-1/2 small:-translate-x-1/2">
            <TypeDropdown types={productTypes} selectedTypeId={typeId} />
          </div>
          <div className="w-full small:absolute small:right-0 small:top-0 small:flex small:justify-end">
            <SortDropdown sortBy={sort} />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            sortBy={sort}
            page={pageNumber}
            typeId={typeId}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  )
}

export default StoreTemplate
