"use client"

// import { createContext } from "react"
import Link from "next/link"
import { Provider, useSelector } from "react-redux"

// import { AuthContextProvider } from "@/context/auth-context.js"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

import AuthenticationPage from "./login"
import MusicPage from "./music"
import { store, useAppSelector } from "./store"

export default function IndexPage() {
  const user = useAppSelector((state) => state.user.value) // state:any is just makeshift soln for code to work
  return (
    // <AuthContextProvider>
    <>
      {/* <Provider store={store}> */}
      {user.isLoggedIn ? <MusicPage /> : <AuthenticationPage />}
      {/* </Provider> */}
    </>
    // </AuthContextProvider>
  )
}
