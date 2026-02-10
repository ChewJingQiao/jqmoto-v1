import { login } from "@lib/data/customer"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import Input from "@modules/common/components/input"
import { useActionState } from "react"
import { useParams } from "next/navigation"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useActionState(login, null)
  const params = useParams()
  const countryCode = (params?.countryCode as string) || ""

  return (
    <div
      className="w-full flex flex-col"
      data-testid="login-page"
    >
      <h1 className="text-2xl font-semibold text-grey-90">Welcome back</h1>
      <p className="mt-2 text-sm text-grey-60">
        Sign in to manage your orders, fitment notes, and saved builds.
      </p>
      <form className="w-full" action={formAction}>
        <input type="hidden" name="country_code" value={countryCode} />
        <div className="mt-6 flex flex-col w-full gap-y-2">
          <Input
            label="Email"
            name="email"
            type="email"
            title="Enter a valid email address."
            autoComplete="email"
            required
            data-testid="email-input"
          />
          <Input
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            data-testid="password-input"
          />
        </div>
        <div className="mt-3 flex justify-end text-xs text-grey-60">
          <button
            type="button"
            onClick={() => setCurrentView(LOGIN_VIEW.FORGOT)}
            className="font-medium text-orange-600 hover:text-orange-700"
          >
            Forgot password?
          </button>
        </div>
        <ErrorMessage error={message} data-testid="login-error-message" />
        <SubmitButton
          data-testid="sign-in-button"
          className="w-full mt-6 bg-grey-90 text-white hover:bg-grey-80"
        >
          Sign in
        </SubmitButton>
      </form>
      <div className="mt-6 rounded-lg border border-grey-20 bg-grey-5 px-4 py-3 text-xs text-grey-70">
        Not a member?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="font-semibold text-grey-90 hover:text-orange-600"
          data-testid="register-button"
        >
          Create an account
        </button>
        .
      </div>
    </div>
  )
}

export default Login
