import { Metadata } from "next"

import ResetPassword from "@modules/account/components/reset-password"

export const metadata: Metadata = {
  title: "Reset password",
  description: "Set a new password for your account.",
}

export default function ResetPasswordPage({
  searchParams,
}: {
  searchParams?: { token?: string }
}) {
  return (
    <div className="min-h-[70vh] w-full px-6 py-12 small:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        <div className="w-full rounded-2xl border border-grey-20 bg-white px-8 py-10 shadow-sm small:px-12">
          <ResetPassword token={searchParams?.token} />
        </div>
      </div>
    </div>
  )
}
