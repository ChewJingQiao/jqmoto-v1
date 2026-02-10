"use client"

import { useActionState } from "react"

import { requestPasswordReset } from "@lib/data/customer"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"

const initialState = { error: null as string | null, success: false }

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const ForgotPassword = ({ setCurrentView }: Props) => {
  const [state, formAction] = useActionState(requestPasswordReset, initialState)

  return (
    <div className="w-full flex flex-col" data-testid="forgot-password-page">
      <h1 className="text-2xl font-semibold text-grey-90">
        Reset your password
      </h1>
      <p className="mt-2 text-sm text-grey-60">
        Enter the email tied to your account and we&apos;ll send a reset link.
      </p>
      <form action={formAction} className="w-full">
        <div className="mt-6 flex flex-col w-full gap-y-2">
          <Input
            label="Email"
            name="email"
            type="email"
            title="Enter a valid email address."
            autoComplete="email"
            required
            data-testid="reset-email-input"
          />
        </div>
        <ErrorMessage error={state?.error} data-testid="reset-error-message" />
        {state?.success && (
          <div className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs text-emerald-700">
            If that email exists, a reset link is on the way. Check your inbox.
          </div>
        )}
        <SubmitButton
          data-testid="reset-submit-button"
          className="w-full mt-6 bg-grey-90 text-white hover:bg-grey-80"
        >
          Send reset link
        </SubmitButton>
      </form>
      <div className="mt-6 rounded-lg border border-grey-20 bg-grey-5 px-4 py-3 text-xs text-grey-70">
        Remembered your password?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="font-semibold text-grey-90 hover:text-orange-600"
        >
          Back to sign in
        </button>
        .
      </div>
    </div>
  )
}

export default ForgotPassword
