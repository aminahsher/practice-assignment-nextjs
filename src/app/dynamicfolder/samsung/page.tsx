import React from 'react'
import Link from 'next/link'

function Samsung() {
  return (
    <body>
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
  <div className="text-center bg-white p-10 rounded-2xl shadow-2xl transform transition duration-500 hover:scale-105">
    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-6">
      Samsung S9 Plus
    </h1>
    <img src="/download.png" alt="Samsung logo" className="h-20 w-auto mx-auto mb-4 rounded-lg shadow-md" />
    <Link href={"/"} className="text-lg font-medium text-blue-600 hover:text-blue-800"> Home</Link>

  </div>
</div>
     
</body>
  )
}
 
export default Samsung

