import React, { ReactNode } from 'react'

const Layout = ({
  children,
  modal,
}: Readonly<{ children: ReactNode; modal: ReactNode }>) => (
  <div className={'space-y-5'}>
    <div className={'text-3xl'}>ToDo リスト</div>
    <div>{children}</div>
    {modal}
  </div>
)

export default Layout
