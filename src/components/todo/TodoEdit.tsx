import React from 'react'

export const TodoEdit = ({ title }: Readonly<{ title: string }>) => {
  return (
    <div>
      <div>TodoEdit</div>
      <div>{title}</div>
    </div>
  )
}
