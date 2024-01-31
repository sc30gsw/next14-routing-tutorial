import React, { ReactNode } from 'react'

const DashboardLayout = ({
  children,
  team,
  analytics,
}: Readonly<{
  children: ReactNode
  team: ReactNode
  analytics: ReactNode
}>) => {
  return (
    <div>
      <div>DashboardLayout</div>
      <div>{team}</div>
      <div>{analytics}</div>
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout
