import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import MusicPage from "./music"
import AuthenticationPage from "./login"

export default function IndexPage() {
  return (
    // <MusicPage/>
    <AuthenticationPage/>
  )
}
