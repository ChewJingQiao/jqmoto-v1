"use client"

import { useCallback, useEffect, useState, useTransition } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { HttpTypes } from "@medusajs/types"

type TypeDropdownProps = {
  types: HttpTypes.StoreProductType[]
  selectedTypeId?: string
}

const TypeDropdown = ({ types, selectedTypeId }: TypeDropdownProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [pending, startTransition] = useTransition()
  const [localValue, setLocalValue] = useState(selectedTypeId || "")

  useEffect(() => {
    setLocalValue(selectedTypeId || "")
  }, [selectedTypeId])

  const createQueryString = useCallback(
    (name: string, value?: string) => {
      const params = new URLSearchParams(searchParams)
      if (!value) {
        params.delete(name)
      } else {
        params.set(name, value)
      }
      return params.toString()
    },
    [searchParams]
  )

  const onChange = (value: string) => {
    setLocalValue(value)
    const query = createQueryString("type_id", value || undefined)
    startTransition(() => {
      router.push(query ? `${pathname}?${query}` : pathname)
    })
  }

  return (
    <div className="flex items-center gap-3 justify-center">
      <span className="text-xs uppercase tracking-[0.2em] text-ui-fg-subtle">
        Type
      </span>
      <div className="inline-flex items-center rounded-full border border-ui-border-base bg-white p-1 shadow-sm">
        <button
          type="button"
          onClick={() => onChange("")}
          disabled={pending}
          className={[
            "rounded-full px-4 py-2 text-sm font-medium transition",
            localValue === ""
              ? "bg-grey-90 text-white"
              : "text-ui-fg-base hover:text-ui-fg-base",
            pending ? "opacity-60" : "",
          ].join(" ")}
        >
          All
        </button>
        {types.map((type) => {
          const active = localValue === type.id
          return (
            <button
              key={type.id}
              type="button"
              onClick={() => onChange(type.id)}
              disabled={pending}
              className={[
                "rounded-full px-4 py-2 text-sm font-medium transition",
                active
                  ? "bg-grey-90 text-white"
                  : "text-ui-fg-base hover:text-ui-fg-base",
                pending ? "opacity-60" : "",
              ].join(" ")}
            >
              {type.value}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default TypeDropdown
