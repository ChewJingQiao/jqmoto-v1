import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | JQMOTO",
  description: "Privacy policy for JQMOTO customers.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-grey-5">
      <div className="content-container py-12 small:py-16">
        <div className="max-w-3xl space-y-6">
          <span className="text-xs uppercase tracking-[0.35em] text-ui-fg-subtle">
            Privacy Policy
          </span>
          <h1 className="text-3xl font-semibold text-ui-fg-base">
            Your privacy matters.
          </h1>
          <p className="text-sm text-ui-fg-subtle">
            We collect only what we need to fulfill your orders and support your
            account. We never sell your information.
          </p>

          <div className="rounded-2xl border border-ui-border-base bg-white p-6 shadow-sm space-y-4 text-sm text-ui-fg-subtle">
            <p>
              <span className="font-semibold text-ui-fg-base">Data we collect:</span>{" "}
              name, contact details, shipping address, payment status, and order
              history.
            </p>
            <p>
              <span className="font-semibold text-ui-fg-base">How we use it:</span>{" "}
              to process orders, provide support, and improve the shopping
              experience.
            </p>
            <p>
              <span className="font-semibold text-ui-fg-base">Data sharing:</span>{" "}
              limited to payment providers, logistics partners, and services
              required to run the store.
            </p>
            <p>
              <span className="font-semibold text-ui-fg-base">Your rights:</span>{" "}
              you can request access, correction, or deletion of your data at any
              time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
