'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

const SettingsPage = () => {
  const pathname = usePathname()

  const switchLocale = (locale: string) => {
    const newPath = `${pathname}/${locale}`
    // 最後に置き換えたパスに繊維（enの場合settings/enに遷移する（前の履歴（/settingsを置き換える）が追加されず置き換えるため））
    window.history.replaceState(null, '', newPath)
  }

  return (
    <>
      <button type="button" onClick={() => switchLocale('en')}>
        English
      </button>
      <button type="button" onClick={() => switchLocale('fr')}>
        French
      </button>
    </>
  )
}

export default SettingsPage
