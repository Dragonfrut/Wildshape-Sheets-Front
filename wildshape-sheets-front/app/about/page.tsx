import React from 'react'

export const metadata = {
    title: "About"
  }

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="container mx-auto p-8">
    <h1 className="text-3xl font-bold mb-4">About Us</h1>
    
    <div className="flex items-center justify-center mb-8">
      <img src="/team.jpg" alt="Team Photo" className="rounded-full w-32 h-32" />
    </div>

    <p className="text-lg mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis dolor a sem condimentum euismod.
    </p>

    <p className="text-lg mb-4">
      Fusce vel sem ut nisi tincidunt tincidunt eu ut elit. Integer vel dui vitae mauris fringilla aliquet.
    </p>

    <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>

    <div className="flex justify-center">
      <div className="max-w-xs mx-2 bg-white rounded-lg p-6 mb-4">
        <img src="/person1.jpg" alt="Team Member 1" className="rounded-full w-24 h-24 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">John Doe</h3>
        <p className="text-gray-700">Role: Designer</p>
      </div>

      <div className="max-w-xs mx-2 bg-white rounded-lg p-6 mb-4">
        <img src="/person2.jpg" alt="Team Member 2" className="rounded-full w-24 h-24 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
        <p className="text-gray-700">Role: Developer</p>
      </div>
    </div>
  </div>
  </main>
  )
}
