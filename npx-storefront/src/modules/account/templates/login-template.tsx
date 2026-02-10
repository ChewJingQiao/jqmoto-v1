"use client"

import { useState } from "react"

import Register from "@modules/account/components/register"
import Login from "@modules/account/components/login"
import ForgotPassword from "@modules/account/components/forgot-password"

export enum LOGIN_VIEW {
  SIGN_IN = "sign-in",
  REGISTER = "register",
  FORGOT = "forgot",
}

const LoginTemplate = () => {
  const [currentView, setCurrentView] = useState<LOGIN_VIEW>(LOGIN_VIEW.SIGN_IN)

  return (
    <div className="w-full px-4 small:px-6 flex justify-center -mt-12 small:-mt-16">
      <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl border border-grey-20 bg-white shadow-sm">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#0b0d14_0%,_#0b0d14_32%,_#111827_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(245,158,11,0.12)_0%,_rgba(249,115,22,0.18)_25%,_rgba(15,23,42,0.0)_55%)]" />
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(249,115,22,0.25),_rgba(249,115,22,0)_70%)]" />
          <div className="absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(14,116,144,0.2),_rgba(14,116,144,0)_70%)]" />
          <div className="absolute inset-0 opacity-40 bg-[linear-gradient(135deg,_rgba(255,255,255,0.06)_0%,_rgba(255,255,255,0.0)_30%,_rgba(255,255,255,0.08)_60%,_rgba(255,255,255,0.0)_100%)]" />
        </div>
        <div className="relative grid grid-cols-1 gap-0 small:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="flex flex-col justify-between px-6 py-8 text-white small:px-12 small:py-10">
            <div className="max-w-md">
              <p className="text-xs uppercase tracking-[0.4em] text-orange-200/80">
                JQMOTO Garage Supply
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight small:text-4xl">
                Engineered for clean installs, loud systems, and bold builds.
              </h1>
              <p className="mt-4 text-sm text-white/70">
                From premium speakers to aggressive bodykits, manage your
                garage-ready orders and track your builds with one account.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 text-xs text-white/80">
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-3">
                  Track orders &amp; shipments
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-3">
                  Save fitment details
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-3">
                  Secure payments
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-3">
                  Build wishlists
                </div>
              </div>
            </div>
            <div className="mt-10 text-xs text-white/60">
              Built for enthusiasts who care about every bolt, every decibel.
            </div>
          </div>

          <div className="bg-white px-6 py-8 small:px-10 small:py-10">
            {currentView === LOGIN_VIEW.SIGN_IN && (
              <Login setCurrentView={setCurrentView} />
            )}
            {currentView === LOGIN_VIEW.REGISTER && (
              <Register setCurrentView={setCurrentView} />
            )}
            {currentView === LOGIN_VIEW.FORGOT && (
              <ForgotPassword setCurrentView={setCurrentView} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginTemplate
