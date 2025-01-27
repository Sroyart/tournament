"use client"

import Button from "@/components/Button"
import JoinForm from "@/components/forms/JoinForm"
import { useRouter } from "next/navigation"
import React from "react"

const Modal = () => {
  const router = useRouter()

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          router.back()
        }
      }}
      className="fixed inset-0 flex items-center justify-center bg-black-900 bg-opacity-50"
    >
      <dialog
        open
        className="relative bg-white dark:bg-black-500 p-6 rounded-sm shadow-lg"
      >
        <span
          className="absolute top-2 right-2 text-grey-100 cursor-pointer"
          onClick={() => {
            router.back()
          }}
        >
          &times;
        </span>
        <h1>Join</h1>
        <JoinForm />
        <Button
          buttonText={{ default: "Close Modal", pending: "Close Modal" }}
          onClick={() => {
            router.back()
          }}
        />
      </dialog>
    </div>
  )
}

export default Modal
