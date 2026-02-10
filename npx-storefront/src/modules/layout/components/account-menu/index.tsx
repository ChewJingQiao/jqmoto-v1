"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { useParams } from "next/navigation"

import { signout } from "@lib/data/customer"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const AccountMenu = () => {
  const params = useParams()
  const countryCodeParam = params?.countryCode
  const countryCode = Array.isArray(countryCodeParam)
    ? countryCodeParam[0]
    : countryCodeParam || "us"

  const signoutAction = useMemo(() => signout.bind(null, countryCode), [countryCode])

  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!open) return
      const target = event.target as Node
      if (containerRef.current && !containerRef.current.contains(target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [open])

  return (
    <div
      ref={containerRef}
      className="h-full z-50"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="relative h-full">
        <button
          type="button"
          className="h-full hover:text-ui-fg-base"
          data-testid="nav-account-link"
          onClick={() => setOpen((prev) => !prev)}
          aria-haspopup="true"
          aria-expanded={open}
        >
          Account
        </button>
        <div
          className={[
            "hidden small:block absolute top-[calc(100%+1px)] right-0 w-44 bg-white border-x border-b border-gray-200 text-ui-fg-base shadow-sm",
            open
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-1 pointer-events-none",
            "transition duration-150",
          ].join(" ")}
        >
          <div className="flex flex-col p-2 text-xs text-grey-70">
            <LocalizedClientLink
              href="/account"
              className="rounded-md px-3 py-2 text-left text-grey-90 hover:bg-grey-5"
              onClick={() => setOpen(false)}
            >
              My account
            </LocalizedClientLink>
            <form action={signoutAction}>
              <button
                type="submit"
                className="w-full rounded-md px-3 py-2 text-left text-rose-600 hover:bg-rose-50"
              >
                Log out
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountMenu
