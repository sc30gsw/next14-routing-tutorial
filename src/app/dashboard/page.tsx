'use client'

import { useSearchParams } from 'next/navigation'
import React from 'react'

const DashboardPage = () => {
  const searchParams = useSearchParams()

  const updateSorting = (sortOrder: string) => {
    const params = new URLSearchParams(searchParams.toString())

    params.set('sort', sortOrder)
    window.history.pushState(null, '', `/dashboard?${params.toString()}`)
  }
  return (
    <>
      <button type="button" onClick={() => updateSorting('asc')}>
        Sort Ascending
      </button>
      <button type="button" onClick={() => updateSorting('desc')}>
        Sort Descending
      </button>
    </>
  )
}

export default DashboardPage
