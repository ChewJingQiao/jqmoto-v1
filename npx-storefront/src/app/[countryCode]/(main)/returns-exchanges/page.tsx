import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Returns & Exchanges | JQMOTO",
  description: "Returns and exchanges policy for JQMOTO orders.",
}

export default function ReturnsExchangesPage() {
  return (
    <div className="bg-grey-5">
      <div className="content-container py-12 small:py-16">
        <div className="grid grid-cols-1 gap-10 small:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.35em] text-ui-fg-subtle">
              Returns & Exchanges
            </span>
            <h1 className="text-3xl font-semibold text-ui-fg-base">
              Stress-free returns for your build.
            </h1>
            <p className="text-sm text-ui-fg-subtle">
              We get it — sometimes parts don&apos;t fit your build the way you
              expected. Here&apos;s a clear, fast path to exchange or return
              items with zero drama.
            </p>
            <div className="rounded-2xl border border-ui-border-base bg-white p-6 shadow-sm">
              <div className="grid grid-cols-1 gap-6 small:grid-cols-2">
                <div className="rounded-xl border border-ui-border-base/60 bg-grey-5 p-4">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-ui-fg-subtle">
                    Return window
                  </p>
                  <p className="mt-3 text-base font-semibold text-ui-fg-base">
                    7 days from delivery
                  </p>
                  <p className="mt-2 text-sm text-ui-fg-subtle">
                    Items must be unused and in original packaging.
                  </p>
                </div>
                <div className="rounded-xl border border-ui-border-base/60 bg-grey-5 p-4">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-ui-fg-subtle">
                    Exchange window
                  </p>
                  <p className="mt-3 text-base font-semibold text-ui-fg-base">
                    14 days from delivery
                  </p>
                  <p className="mt-2 text-sm text-ui-fg-subtle">
                    Swap sizes, fitment, or color if stock is available.
                  </p>
                </div>
              </div>
              <div className="mt-6 rounded-lg border border-dashed border-ui-border-base/60 bg-white px-4 py-3 text-sm text-ui-fg-subtle">
                Proof of purchase is required for all requests.
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-ui-border-base bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-ui-fg-base">
              How the process works
            </h2>
            <div className="mt-6 space-y-6 text-sm text-ui-fg-subtle">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-grey-10 text-sm font-semibold text-ui-fg-base">
                  1
                </div>
                <div>
                  <p className="text-ui-fg-base font-medium">
                    Start a request
                  </p>
                  <p className="mt-1">
                    Message us with your order number, item name, and the
                    reason for return.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-grey-10 text-sm font-semibold text-ui-fg-base">
                  2
                </div>
                <div>
                  <p className="text-ui-fg-base font-medium">
                    Get a confirmation
                  </p>
                  <p className="mt-1">
                    We reply with approval, return details, and next steps.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-grey-10 text-sm font-semibold text-ui-fg-base">
                  3
                </div>
                <div>
                  <p className="text-ui-fg-base font-medium">
                    Pack &amp; ship
                  </p>
                  <p className="mt-1">
                    Use the original packaging to protect items in transit.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-grey-10 text-sm font-semibold text-ui-fg-base">
                  4
                </div>
                <div>
                  <p className="text-ui-fg-base font-medium">
                    Receive your update
                  </p>
                  <p className="mt-1">
                    Refunds or exchanges are processed after inspection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 small:grid-cols-3">
          <div className="rounded-2xl border border-ui-border-base bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-ui-fg-base">
              Eligible items
            </h3>
            <p className="mt-2 text-sm text-ui-fg-subtle">
              Unused parts, unopened electronics, and uninstalled bodykits are
              eligible for return.
            </p>
          </div>
          <div className="rounded-2xl border border-ui-border-base bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-ui-fg-base">
              Non-returnable
            </h3>
            <p className="mt-2 text-sm text-ui-fg-subtle">
              Custom orders, clearance items, and installed electronics cannot
              be returned.
            </p>
          </div>
          <div className="rounded-2xl border border-ui-border-base bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-ui-fg-base">
              Refund timing
            </h3>
            <p className="mt-2 text-sm text-ui-fg-subtle">
              Approved refunds are issued within 5-7 business days after we
              receive the item.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-ui-border-base bg-white px-6 py-8 shadow-sm small:px-10">
          <div className="flex flex-col gap-4 small:flex-row small:items-center small:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-ui-fg-base">
                Need help with a return?
              </h2>
              <p className="mt-2 text-sm text-ui-fg-subtle">
                Reach out anytime — we&apos;ll guide you through the best option.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="http://wa.me/60194191954"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 underline hover:text-blue-700"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Us
              </a>
              <a
                href="/find-us"
                className="inline-flex items-center gap-2 text-sm font-medium text-ui-fg-base underline hover:text-ui-fg-subtle"
              >
                Find Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
