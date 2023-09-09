"use client"
import { useRouter } from 'next/navigation'
// pages/register.tsx
import { useState } from 'react';

export default function Register() {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  let router = useRouter();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Send a POST request to your ASP.NET API for user registration
      const response = await fetch('https://localhost:7156/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        // Registration successful, handle the response as needed
        const data = await response.json();
        console.log('Registration successful:', data);
        router.push('/login');
      } else {
        // Registration failed, handle errors
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="mt-36">
  <form className="flex flex-col items-center">
    <input
      className="p-5 h-12 rounded-full bg-gray-100 border-none text-gray-700"
      type="text"
      value={username}
      onChange={handleUsernameChange}
      placeholder="Username"
    />
    <input
      className="mt-10 p-5 h-12 rounded-full bg-gray-100 border-none text-gray-700"
      type="email"
      value={email}
      onChange={handleEmailChange}
      placeholder="Email"
    />
    <input
      className="mt-10 p-5 h-12 rounded-full bg-gray-100 border-none text-gray-700"
      type="password"
      value={password}
      onChange={handlePasswordChange}
      placeholder="Password"
    />
    <button
      type="submit"
      onClick={onSubmit}
      className="mt-10 p-4 bg-blue-500 rounded-full text-white"
    >
      Register
    </button>
    <p>Already have an account? <a href='/login'>Sign In</a></p>
  </form>
</div>

  );
}
