import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <main className="relative">{props.children}</main>
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
          <a
            href="http://wa.me/60194191954"
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with JQMOTO on WhatsApp"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#25D366] shadow-lg backdrop-blur hover:bg-white"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6"
              fill="currentColor"
            >
              <path d="M20.52 3.48A11.77 11.77 0 0 0 12.05 0C5.4 0 0 5.4 0 12.05c0 2.12.55 4.2 1.6 6.02L0 24l6.1-1.6a12 12 0 0 0 5.95 1.52h.01c6.65 0 12.05-5.4 12.05-12.05 0-3.22-1.25-6.25-3.54-8.44zM12.05 21.5h-.01a9.46 9.46 0 0 1-4.82-1.32l-.35-.21-3.62.95.97-3.52-.23-.37A9.46 9.46 0 0 1 2.6 12.05C2.6 6.84 6.84 2.6 12.05 2.6c2.52 0 4.89.98 6.67 2.76a9.34 9.34 0 0 1 2.76 6.68c0 5.2-4.24 9.46-9.43 9.46zm5.23-7.1c-.29-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.66.15-.2.29-.76.96-.93 1.15-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.91-2.18-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.52.07-.79.36-.27.3-1.03 1.01-1.03 2.46 0 1.45 1.05 2.85 1.2 3.05.15.2 2.06 3.14 5 4.4.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.12.56-.08 1.73-.7 1.97-1.38.24-.68.24-1.27.17-1.38-.07-.12-.27-.19-.56-.34z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/weiminggc"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit JQMOTO on Instagram"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#E1306C] shadow-lg backdrop-blur hover:bg-white"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" />
            </svg>
          </a>
        </div>
      </body>
    </html>
  )
}
