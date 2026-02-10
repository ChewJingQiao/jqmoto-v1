import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Returns & Exchanges | JQMOTO",
  description: "Returns and exchanges policy for JQMOTO orders.",
}

export default function ReturnsExchangesPage() {
  return (
    <div className="content-container py-12 small:py-16">
      <div className="max-w-3xl space-y-6">
        <span className="text-xs uppercase tracking-[0.35em] text-ui-fg-subtle">
          Returns & Exchanges
        </span>
        <h1 className="text-3xl font-semibold text-ui-fg-base">
          Returns & Exchanges
        </h1>
        <p className="text-sm text-ui-fg-subtle">
          We want you to be confident in every purchase. If something isn&apos;t
          right, we&apos;re here to help.
        </p>
        <div className="rounded-2xl border border-ui-border-base bg-white p-6 shadow-sm space-y-4 text-sm text-ui-fg-subtle">
          <p>
            <span className="font-semibold text-ui-fg-base">
              Return window:
            </span>{" "}
            Returns are accepted within 7 days of delivery for unused items in
            original packaging.
          </p>
          <p>
            <span className="font-semibold text-ui-fg-base">Exchanges:</span>{" "}
            Exchanges are available for the same item if a different fitment or
            color is needed, subject to stock availability.
          </p>
          <p>
            <span className="font-semibold text-ui-fg-base">Condition:</span>{" "}
            Items must be unused, uninstalled, and in their original packaging.
          </p>
          <p>
            <span className="font-semibold text-ui-fg-base">Contact:</span>{" "}
            If you need help, reach out via WhatsApp or the Find Us page.
          </p>
        </div>
      </div>
    </div>
  )
}
