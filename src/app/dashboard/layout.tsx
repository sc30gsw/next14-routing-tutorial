import React, { ReactNode } from 'react'

const DashboardLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div>
      <div>DashboardLayout</div>
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout
