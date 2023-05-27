import Link from "next/link"
// import { AuthContextProvider } from "@/context/auth-context.js"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

import AuthenticationPage from "./login"
import MusicPage from "./music"

export default function IndexPage() {
  return (
    // <AuthContextProvider>
      // <MusicPage /> 
      <AuthenticationPage />
    // </AuthContextProvider>
  )
}
