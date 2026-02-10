import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Find Us | JQMOTO",
  description: "Visit JQMOTO for performance parts and in-person support.",
}

export default function FindUsPage() {
  return (
    <div className="content-container py-12 small:py-16">
      <div className="grid grid-cols-1 gap-10 small:grid-cols-[1fr_1.1fr] items-start">
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-[0.35em] text-ui-fg-subtle">
            Find us
          </span>
          <div>
            <h1 className="text-3xl font-semibold text-ui-fg-base">
              Visit JQMOTO in Kuala Lumpur
            </h1>
            <p className="mt-3 text-sm text-ui-fg-subtle">
              Drop by for fitment checks, audio demos, and lighting installs. We
              can help you choose the right parts for your build.
            </p>
          </div>
          <div className="rounded-2xl border border-ui-border-base bg-white p-6 shadow-sm">
            <div className="space-y-3 text-sm text-ui-fg-base">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-ui-fg-subtle">
                  Phone
                </p>
                <a
                  href="tel:+60194191954"
                  className="text-lg font-semibold text-ui-fg-base"
                >
                  +60 19 419 1954
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-ui-fg-subtle">
                  WhatsApp
                </p>
                <a
                  href="http://wa.me/60194191954"
                  className="text-sm font-medium text-blue-600 underline hover:text-blue-700"
                  target="_blank"
                  rel="noreferrer"
                >
                  Message us on WhatsApp
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-ui-fg-subtle">
                  Address
                </p>
                <p className="text-sm text-ui-fg-base">
                  123 Jalan Tun Razak, Kuala Lumpur, Malaysia
                </p>
                <p className="text-xs text-ui-fg-subtle">
                  (Demo location — update when ready)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-ui-border-base bg-white shadow-sm">
          <div className="aspect-[4/3] w-full">
            <iframe
              title="JQMOTO location"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=3.1390,101.6869&z=15&output=embed"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
