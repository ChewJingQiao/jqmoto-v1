import { Metadata } from "next"

import Hero from "@modules/home/components/hero"
import { listProductsWithSort } from "@lib/data/products"
import { getRegion } from "@lib/data/regions"
import ProductPreview from "@modules/products/components/product-preview"

export const metadata: Metadata = {
  title: "JQMOTO | Performance Car Parts",
  description:
    "Speakers, bodykits, and performance-ready car parts curated for bold builds.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const {
    response: { products: newestProducts },
  } = await listProductsWithSort({
    countryCode,
    sortBy: "created_at",
    page: 1,
    revalidateSeconds: 60 * 60 * 24,
    queryParams: {
      limit: 4,
    },
  })

  if (!region) {
    return null
  }

  return (
    <div className="bg-grey-5">
      <Hero />
      <section className="content-container py-12 small:py-16">
        <div className="flex flex-col gap-3">
          <span className="text-xs uppercase tracking-[0.35em] text-ui-fg-subtle">
            New to the store
          </span>
          <h2 className="text-2xl font-semibold text-ui-fg-base">
            Fresh arrivals for audio, bodykits, and clean installs
          </h2>
          <p className="text-sm text-ui-fg-subtle max-w-2xl">
            Handpicked parts and upgrades designed to look sharp, fit right, and
            deliver serious performance.
          </p>
        </div>
      </section>
      <section className="content-container pb-12">
        <ul className="grid grid-cols-2 gap-6 small:grid-cols-4">
          {newestProducts.map((product) => (
            <li key={product.id}>
              <ProductPreview
                product={product}
                region={region}
                compact
                showDescription
              />
            </li>
          ))}
        </ul>
      </section>
      <section className="content-container py-12 small:py-20">
        <div className="grid grid-cols-1 gap-6 small:grid-cols-3">
          <div className="rounded-2xl border border-ui-border-base bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-ui-fg-base">
              Fitment-first picks
            </h3>
            <p className="mt-2 text-sm text-ui-fg-subtle">
              We focus on parts that fit cleanly and ship with the right specs.
            </p>
          </div>
          <div className="rounded-2xl border border-ui-border-base bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-ui-fg-base">
              Fast build support
            </h3>
            <p className="mt-2 text-sm text-ui-fg-subtle">
              Need help choosing? Our team responds fast with real advice.
            </p>
          </div>
          <div className="rounded-2xl border border-ui-border-base bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-ui-fg-base">
              Secure checkout
            </h3>
            <p className="mt-2 text-sm text-ui-fg-subtle">
              Safe payments with clear order tracking from cart to doorstep.
            </p>
          </div>
        </div>
      </section>
      <section className="content-container pb-16 small:pb-24">
        <div className="rounded-2xl border border-ui-border-base bg-grey-5 px-6 py-10 small:px-12 small:py-12">
          <div className="flex flex-col gap-4 small:flex-row small:items-center small:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-ui-fg-base">
                Not sure what fits your build?
              </h3>
              <p className="mt-2 text-sm text-ui-fg-subtle">
                Tell us your model and style goals — we&apos;ll help you get it
                right.
              </p>
            </div>
            <a
              href="http://wa.me/60194191954"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 underline hover:text-blue-700"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L11 4" />
                <path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 1 0 7.07 7.07L13 20" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
