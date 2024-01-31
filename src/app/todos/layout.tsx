import React, { ReactNode } from 'react'

// @list を埋め込む
// @modal を埋め込む
const Layout = ({
  list,
  modal,
}: Readonly<{ list: ReactNode; modal: ReactNode; foo: ReactNode }>) => (
  <div className={'space-y-5'}>
    <div className={'text-3xl'}>ToDo リスト</div>
    <div>{list}</div>
    {modal}
  </div>
)

export default Layout
