"use client"

import { useActionState } from "react"
import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { signup } from "@lib/data/customer"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(signup, null)

  return (
    <div
      className="w-full flex flex-col"
      data-testid="register-page"
    >
      <h1 className="text-2xl font-semibold text-grey-90">
        Join the Garage Crew
      </h1>
      <p className="mt-2 text-sm text-grey-60">
        Create your profile to track builds, save fitments, and checkout faster.
      </p>
      <form className="w-full flex flex-col" action={formAction}>
        <div className="mt-6 flex flex-col w-full gap-y-2">
          <Input
            label="First name"
            name="first_name"
            required
            autoComplete="given-name"
            data-testid="first-name-input"
          />
          <Input
            label="Last name"
            name="last_name"
            required
            autoComplete="family-name"
            data-testid="last-name-input"
          />
          <Input
            label="Email"
            name="email"
            required
            type="email"
            autoComplete="email"
            data-testid="email-input"
          />
          <Input
            label="Phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            data-testid="phone-input"
          />
          <Input
            label="Password"
            name="password"
            required
            type="password"
            autoComplete="new-password"
            data-testid="password-input"
          />
        </div>
        <ErrorMessage error={message} data-testid="register-error" />
        <span className="mt-4 text-xs text-grey-60">
          By creating an account, you agree to Medusa Store&apos;s{" "}
          <LocalizedClientLink
            href="/content/privacy-policy"
            className="font-medium text-grey-90 hover:text-orange-600"
          >
            Privacy Policy
          </LocalizedClientLink>{" "}
          and{" "}
          <LocalizedClientLink
            href="/content/terms-of-use"
            className="font-medium text-grey-90 hover:text-orange-600"
          >
            Terms of Use
          </LocalizedClientLink>
          .
        </span>
        <SubmitButton
          className="w-full mt-6 bg-grey-90 text-white hover:bg-grey-80"
          data-testid="register-button"
        >
          Join
        </SubmitButton>
      </form>
      <div className="mt-6 rounded-lg border border-grey-20 bg-grey-5 px-4 py-3 text-xs text-grey-70">
        Already a member?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="font-semibold text-grey-90 hover:text-orange-600"
        >
          Sign in
        </button>
        .
      </div>
    </div>
  )
}

export default Register
