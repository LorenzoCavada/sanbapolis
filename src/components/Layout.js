import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-full-screen">
      <Navbar />
      <div className="mb-auto">
        {children}
      </div>
      <Footer />
    </div>
  )
}