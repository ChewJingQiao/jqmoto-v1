import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Sale | JQMOTO",
  description: "Terms of sale for JQMOTO orders.",
}

export default function TermsOfSalePage() {
  return (
    <div className="bg-grey-5">
      <div className="content-container py-12 small:py-16">
        <div className="max-w-3xl space-y-6">
          <span className="text-xs uppercase tracking-[0.35em] text-ui-fg-subtle">
            Terms of Sale
          </span>
          <h1 className="text-3xl font-semibold text-ui-fg-base">
            Clear expectations for every order.
          </h1>
          <p className="text-sm text-ui-fg-subtle">
            These terms explain how we process orders, payments, and deliveries.
          </p>

          <div className="rounded-2xl border border-ui-border-base bg-white p-6 shadow-sm space-y-4 text-sm text-ui-fg-subtle">
            <p>
              <span className="font-semibold text-ui-fg-base">Pricing:</span>{" "}
              prices are shown in your selected currency and may change without
              notice.
            </p>
            <p>
              <span className="font-semibold text-ui-fg-base">Payment:</span>{" "}
              orders are processed once payment is confirmed.
            </p>
            <p>
              <span className="font-semibold text-ui-fg-base">Shipping:</span>{" "}
              delivery times vary by location and carrier availability.
            </p>
            <p>
              <span className="font-semibold text-ui-fg-base">Returns:</span>{" "}
              see our Returns & Exchanges page for eligibility and timelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
