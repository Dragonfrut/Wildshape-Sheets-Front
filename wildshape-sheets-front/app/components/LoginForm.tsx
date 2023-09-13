"use client"

import React from 'react';
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'


// Now you can use TextField in your code


export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter()
  //const { error } = router.query

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signIn('credentials', { email, password, callbackUrl: '/' })
  }

  return (
    <div className="mt-36">
  <form className="flex flex-col items-center">
    <input
      className="p-5 h-12 rounded-full bg-gray-100 border-none text-gray-700"
      type="text"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email"
    />
    <input
      className="mt-10 p-5 h-12 rounded-full bg-gray-100 border-none text-gray-700"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
    />
    <button
      type="submit"
      onClick={onSubmit}
      className="mt-10 p-4 bg-blue-500 rounded-full text-white"
    >
      Log In
    </button>
    <p>Don't have an account? <a href='/register'>Register</a></p>
  </form>
</div>
  )
}
