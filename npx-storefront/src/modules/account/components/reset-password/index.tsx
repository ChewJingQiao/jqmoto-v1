"use client"

import { useActionState } from "react"

import { resetPasswordWithToken } from "@lib/data/customer"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import Input from "@modules/common/components/input"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const initialState = { error: null as string | null, success: false }

type Props = {
  token?: string
}

const ResetPassword = ({ token }: Props) => {
  const [state, formAction] = useActionState(resetPasswordWithToken, initialState)

  return (
    <div className="w-full max-w-md">
      <h1 className="text-3xl font-semibold text-grey-90">
        Set a new password
      </h1>
      <p className="mt-2 text-sm text-grey-60">
        Choose something strong to keep your garage account secure.
      </p>
      <form action={formAction} className="mt-8">
        {token ? (
          <input type="hidden" name="token" value={token} />
        ) : (
          <Input
            label="Reset token"
            name="token"
            required
            data-testid="reset-token-input"
          />
        )}
        <div className="mt-4 flex flex-col gap-y-2">
          <Input
            label="New password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            data-testid="new-password-input"
          />
          <Input
            label="Confirm password"
            name="confirm_password"
            type="password"
            autoComplete="new-password"
            required
            data-testid="confirm-password-input"
          />
        </div>
        <ErrorMessage error={state?.error} data-testid="reset-error-message" />
        {state?.success && (
          <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs text-emerald-700">
            Password updated. You can now sign in with your new credentials.
          </div>
        )}
        <SubmitButton className="w-full mt-6 bg-grey-90 text-white hover:bg-grey-80">
          Update password
        </SubmitButton>
      </form>
      <div className="mt-6 text-xs text-grey-60">
        Back to{" "}
        <LocalizedClientLink
          href="/account"
          className="font-semibold text-grey-90 hover:text-orange-600"
        >
          sign in
        </LocalizedClientLink>
        .
      </div>
    </div>
  )
}

export default ResetPassword
