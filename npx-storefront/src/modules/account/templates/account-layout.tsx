import React from "react"


import AccountNav from "../components/account-nav"
import { HttpTypes } from "@medusajs/types"

interface AccountLayoutProps {
  customer: HttpTypes.StoreCustomer | null
  children: React.ReactNode
}

const AccountLayout: React.FC<AccountLayoutProps> = ({
  customer,
  children,
}) => {
  const layoutPadding = customer ? "small:py-12" : "small:py-6"
  const gridPadding = customer ? "py-12" : "py-6"

  return (
    <div className={`flex-1 ${layoutPadding}`} data-testid="account-page">
      <div className="flex-1 content-container h-full max-w-5xl mx-auto bg-white flex flex-col">
        {customer ? (
          <div
            className={`grid grid-cols-1 small:grid-cols-[240px_1fr] ${gridPadding}`}
          >
            <div>
              <AccountNav customer={customer} />
            </div>
            <div className="flex-1">{children}</div>
          </div>
        ) : (
          <div className={`grid grid-cols-1 ${gridPadding}`}>
            <div className="flex-1">{children}</div>
          </div>
        )}
        <div className="flex flex-col small:flex-row items-start small:items-center justify-between small:border-t border-gray-200 py-12 gap-6">
          <div className="max-w-2xl">
            <h3 className="text-xl-semi mb-4">Need help?</h3>
            <span className="txt-medium">
              Our team is ready to assist with orders, fitment, and product
              questions.
            </span>
          </div>
          <div>
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
      </div>
    </div>
  )
}

export default AccountLayout
