import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-full-screen">
      <Navbar />
      <div className="mb-auto pb-6 border-gray-300 border-b">
        <div className="max-w-6xl border-gray-300 border rounded-lg mx-auto mt-16 p-16 shadow-md">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}