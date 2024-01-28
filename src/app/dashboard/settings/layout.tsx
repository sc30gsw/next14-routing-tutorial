import React, { ReactNode } from 'react'

const SettingsLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div>
      <div>SettingsLayout</div>
      <div>{children}</div>
    </div>
  )
}

export default SettingsLayout
