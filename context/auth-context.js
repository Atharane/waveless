"use client"

import { createContext, useContext } from "react"
import { auth } from "@/firebase"
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth"

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const provider = new GoogleAuthProvider()

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
  }

  return (
    <AuthContext.Provider
      value={{
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
