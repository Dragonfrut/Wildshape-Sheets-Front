import React from 'react'
import LoginForm from '../components/LoginForm'

export const metadata = {
  title: "Login"
}

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
      <LoginForm />
    </div>
  </main>
  )
}
