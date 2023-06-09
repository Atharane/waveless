"use client"

import { useState } from "react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import { Music } from "lucide-react"
import { useDispatch } from "react-redux"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserAuthForm } from "@/components/user-auth-form"

import { auth, googleProvider } from "../config/firebase"
import { login } from "../features/user"
import { AppDispatch } from "./store"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

export default function AuthenticationPage() {
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  const [user, setUser] = useState<any>("") // MAKESHIFT solution
  const dispatch = useDispatch<AppDispatch>()

  // const signInWithEmail = async () => {
  //   try {
  //     await createUserWithEmailAndPassword(auth, email, password)

  //     dispatch(login({ name: email, isLoggedIn: true, email: email }))
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      const user = result.user
      setUser(user.displayName)

      // below im updating value in REDUX STORE
      dispatch(
        login({ name: user.displayName, isLoggedIn: true, email: user.email })
      )
    } catch (error) {
      console.log(error)
    }
  }

  // const logOut = async () => {
  //   try {
  //     await signOut(auth)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/authentication-light.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src="/examples/authentication-dark.png"
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/examples/authentication"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage:
                "url(/microphone-1.jpg), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)",
            }}
          />
          <div className="relative z-20 flex items-center text-lg font-medium">
            {/* <Music className="mr-2 h-6 w-6" />  */}
            Waveless productions
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;lorem ipsum dolor sit amet adipuiu dshf dfsg &rdquo;
              </p>
              <footer className="text-sm">Bruno Fernandes</footer>
            </blockquote>
          </div>
        </div>
        {user ? (
          <h1 className="text-4xl text-center ">Logged in as {user}</h1>
        ) : (
          <div className="lg:p-8 ">
            <div className="mx-auto flex w-full flex-col justify-center space-y-8 sm:w-[350px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Create an account
                </h1>
                <p className="text-sm text-muted-foreground">
                  Enter your email below to create your account
                </p>
              </div>
              <UserAuthForm
                signInWithGoogle={signInWithGoogle}
                // signInWithEmail={signInWithEmail}
              />
              <p className="px-8 text-center text-sm text-muted-foreground">
                By clicking continue, you agree to our{" "}
                <Link
                  href="/terms"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
