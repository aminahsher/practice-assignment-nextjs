import React from 'react'
import Link from 'next/link'

export default function Route() {
  return (
    
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
       
       
          <title>Second Route Page</title>
          <meta name="description" content="Learning file-based routing in Next.js" />
       
    
  
        <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-xl text-center transform transition duration-500 hover:scale-105">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-6">
            Second Route Page
          </h1>
          <p className="text-lg text-gray-800 leading-relaxed">
            "/" is home page.
          </p>
          <Link href={"/"} className="text-lg font-medium text-blue-600 hover:text-blue-800"> Home</Link>
        </div>
      </div>
  )
}
