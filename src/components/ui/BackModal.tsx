'use client'

import { useRouter } from 'next/navigation'
import { ReactNode, useState } from 'react'

export const BackModal = ({ children }: Readonly<{ children: ReactNode }>) => {
  const [isOpen, setIsOpen] = useState(true)
  const { back } = useRouter()

  const closeHandler = () => {
    setIsOpen(false)
    back()
  }

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
          {children}
          <button
            type="button"
            onClick={closeHandler}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    )
  )
}
