import React, { ReactNode } from 'react'

const ShopLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div>
      ShopLayout
      <div>{children}</div>
    </div>
  )
}

export default ShopLayout
