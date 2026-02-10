"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

const LoadMore = ({ page, totalPages }: { page: number; totalPages: number }) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const onClick = () => {
    const nextPage = page + 1
    const params = new URLSearchParams(searchParams)
    params.set("page", nextPage.toString())
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  if (page >= totalPages) return null

  return (
    <div className="flex justify-center w-full mt-12">
      <button
        type="button"
        onClick={onClick}
        className="rounded-full border border-ui-border-base bg-white px-6 py-3 text-sm font-medium text-ui-fg-base shadow-sm transition hover:border-grey-30"
      >
        Load more
      </button>
    </div>
  )
}

export default LoadMore
