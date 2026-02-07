"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, Mail, X } from "lucide-react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const canSubmit = useMemo(() => {
    return email.trim().length > 0 && password.trim().length > 0;
  }, [email, password]);

  return (
    <div className="min-h-screen bg-white">
      {/* Page background texture */}
      <div aria-hidden className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-rays-diagonal opacity-[0.25]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      <div className="relative mx-auto max-w-6xl min-h-screen border-x border-slate-200/60">
        <div className="grid min-h-screen grid-cols-1 lg:grid-cols-5">
          {/* Left: Form */}
          <div className="lg:col-span-2 flex items-center justify-center px-6 py-4 ">
            <div className="relative w-full max-w-md">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-21 -left-6 -right-6 h-19 bg-[repeating-linear-gradient(135deg,rgba(148,163,184,0.45)_0,rgba(148,163,184,0.45)_2px,transparent_2px,transparent_10px)]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -top-2 -left-6 -right-6 border-t border-dashed border-slate-300/80"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-2 -left-6 -right-6 border-t border-dashed border-slate-300/80"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-21 -left-6 -right-6 h-19 bg-[repeating-linear-gradient(135deg,rgba(148,163,184,0.45)_0,rgba(148,163,184,0.45)_2px,transparent_2px,transparent_10px)]"
              />

              <div className="pt-6 pb-6">
                <Link href="/" className="inline-flex items-center gap-3 text-slate-900 ml-[-10]">
                <Image src="/feature-logo.png" width={36} height={36} alt="FeatureFlow" />
              </Link>

              <h1 className="font-cooper mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                Sign in
              </h1>
              <p className="font-sans mt-3 text-sm text-slate-500 leading-relaxed">
                Welcome back. Manage flags, rollouts, and experiments with confidence.
              </p>

              <form
                className="mt-8 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  // Wire this up to your auth action/provider.
                }}
              >
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-1">
                    Email address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Mail className="w-4 h-4 text-slate-400" aria-hidden />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-11 rounded-md bg-white pl-10 pr-10 text-sm text-slate-700 ring-1 ring-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                    />
                    {email.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setEmail("")}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600"
                        aria-label="Clear email"
                      >
                        <X className="w-4 h-4" aria-hidden />
                      </button>
                    )}
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-slate-600 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      placeholder="••••••••"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full h-11 rounded-md bg-white px-4 pr-20 text-sm text-slate-700 ring-1 ring-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center gap-2 pr-3">
                      {password.length > 0 && (
                        <button
                          type="button"
                          onClick={() => setPassword("")}
                          className="text-slate-400 hover:text-slate-600"
                          aria-label="Clear password"
                        >
                          <X className="w-4 h-4" aria-hidden />
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => setShowPassword((v) => !v)}
                        className="text-slate-400 hover:text-slate-600"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" aria-hidden />
                        ) : (
                          <Eye className="w-4 h-4" aria-hidden />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Remember me */}
                <div className="flex items-center justify-between">
                  <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-200"
                    />
                    Remember me
                  </label>
                  <Link href="#" className="text-sm text-slate-500 hover:text-slate-900">
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="h-11 w-full rounded-md bg-slate-900 text-white text-sm font-medium transition disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-800"
                >
                  Sign in
                </button>

                <div className="relative py-3">
                  <div className="absolute inset-0 flex items-center" aria-hidden>
                    <div className="w-full border-t border-slate-200" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-3 text-xs text-slate-500">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="h-11 rounded-md bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 text-sm font-medium"
                  >
                    <Image src="/assets/google.svg" width={16} height={16} alt="Google" className="inline mr-2" />
                    Google
                  </button>
                  <button
                    type="button"
                    className="h-11 flex items-center justify-center rounded-md bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50 text-sm font-medium"
                  >
                    <Image src="/assets/apple.svg" width={16} height={16} alt="Apple" className="inline mr-2" />
                    Apple
                  </button>
                </div>

                  <p className="pt-3 text-[11px] leading-relaxed text-slate-500">
                    By signing in, you agree to our{" "}
                    <Link href="#" className="text-slate-700 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-700">
                      Terms of Service
                    </Link>
                    {" "}and{" "}
                    <Link href="#" className="text-slate-700 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-700">
                      Privacy Policy
                    </Link>
                    .
                  </p>

                {/* <p className="pt-2 text-xs text-slate-500 ">
                  Don&apos;t have an account?{" "}
                  <Link href="#" className="text-slate-900 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-900">
                    Sign up
                  </Link>
                </p> */}
              </form>
              </div>
            </div>
          </div>

          {/* Right: Video panel */}
          <div className="relative hidden lg:flex lg:col-span-3 items-center justify-center border-l border-dashed border-slate-200/60 p-6">
            <div className="w-full h-full rounded-lg border border-slate-200/60 overflow-hidden bg-slate-50">
              <video
                className="w-full h-full object-cover"
                src="/assets/video.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
