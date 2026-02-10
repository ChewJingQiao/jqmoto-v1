import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Use | JQMOTO",
  description: "Terms of use for JQMOTO customers.",
}

export default function TermsOfUsePage() {
  return (
    <div className="bg-grey-5">
      <div className="content-container py-12 small:py-16">
        <div className="max-w-3xl space-y-6">
          <span className="text-xs uppercase tracking-[0.35em] text-ui-fg-subtle">
            Terms of Use
          </span>
          <h1 className="text-3xl font-semibold text-ui-fg-base">
            Using JQMOTO responsibly.
          </h1>
          <p className="text-sm text-ui-fg-subtle">
            By accessing or purchasing from JQMOTO, you agree to the terms below.
          </p>

          <div className="rounded-2xl border border-ui-border-base bg-white p-6 shadow-sm space-y-4 text-sm text-ui-fg-subtle">
            <p>
              <span className="font-semibold text-ui-fg-base">Account:</span>{" "}
              keep your account details accurate and secure.
            </p>
            <p>
              <span className="font-semibold text-ui-fg-base">Acceptable use:</span>{" "}
              do not misuse our site, content, or services.
            </p>
            <p>
              <span className="font-semibold text-ui-fg-base">Intellectual property:</span>{" "}
              content and branding belong to JQMOTO and may not be reused without
              permission.
            </p>
            <p>
              <span className="font-semibold text-ui-fg-base">Changes:</span>{" "}
              we may update these terms from time to time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
