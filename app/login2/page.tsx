"use client"

import React, { useState } from "react"
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth"


import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SiteHeader } from "@/components/site-header"

import { auth, googleProvider } from "../../config/firebase"

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.log(error)
    }
  }

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      console.log(error)
    }
  }

  const logOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="flex h-screen">
        <div className="bg-slate-700 h-full w-1/2">Image</div>
        <div className="bg-black h-full w-1/2">
          <div>Login</div>

          <div className="ml-10">
            Create an Account
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
              <Label htmlFor="email">Name</Label>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </div>
            <Button className="h-8 w-20 text-center" onClick={signIn}>
              Sign In
            </Button>
            <br />
            OR CONTINUE WITH
            <br />
            <Button className="h-8 w-30 text-center" onClick={signInWithGoogle}>
              Continue With Google
            </Button>
            <Button className="h-8 w-30 text-center" onClick={logOut}>
              Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
