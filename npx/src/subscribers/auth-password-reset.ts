import type { SubscriberArgs, SubscriberConfig } from "@medusajs/framework"

const DEFAULT_STOREFRONT_URL = "http://localhost:8000"

type PasswordResetEvent = {
  entity_id: string
  actor_type: string
  token: string
  metadata?: Record<string, unknown>
}

const buildResetEmail = (resetUrl: string) => {
  const subject = "Reset your Apex Garage Supply password"
  const html = `
    <div style="font-family:Inter,Segoe UI,Helvetica,Arial,sans-serif;background:#0b0d14;padding:32px;color:#f9fafb;">
      <div style="max-width:560px;margin:0 auto;background:#111827;border-radius:16px;padding:28px;border:1px solid #1f2937;">
        <p style="letter-spacing:0.25em;text-transform:uppercase;color:#f59e0b;font-size:11px;margin:0 0 12px;">Apex Garage Supply</p>
        <h1 style="font-size:22px;margin:0 0 12px;">Reset your password</h1>
        <p style="font-size:14px;line-height:1.6;color:#cbd5f5;margin:0 0 20px;">
          Someone requested a password reset for your account. If this was you, click the button below.
        </p>
        <a href="${resetUrl}" style="display:inline-block;background:#f97316;color:#0b0d14;text-decoration:none;padding:12px 18px;border-radius:10px;font-weight:600;">
          Set a new password
        </a>
        <p style="font-size:12px;line-height:1.6;color:#94a3b8;margin:20px 0 0;">
          If you didn&apos;t request this, you can safely ignore this email.
        </p>
      </div>
    </div>
  `

  return { subject, html }
}

export default async function authPasswordResetHandler({
  event: { data },
}: SubscriberArgs<PasswordResetEvent>) {
  if (data.actor_type !== "customer") {
    return
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.RESEND_FROM

  if (!apiKey || !from) {
    console.warn(
      "[auth.password_reset] RESEND_API_KEY or RESEND_FROM is missing. Email not sent."
    )
    return
  }

  const storefrontUrl =
    process.env.STOREFRONT_URL ||
    process.env.MEDUSA_STOREFRONT_URL ||
    DEFAULT_STOREFRONT_URL

  const resetUrl = `${storefrontUrl}/reset-password?token=${data.token}`
  const { subject, html } = buildResetEmail(resetUrl)

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: data.entity_id,
      subject,
      html,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error(
      `[auth.password_reset] Failed to send email: ${response.status} ${errorText}`
    )
  }
}

export const config: SubscriberConfig = {
  event: "auth.password_reset",
}
