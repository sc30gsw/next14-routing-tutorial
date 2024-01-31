import React from 'react'

export const TodoView = ({ id }: Readonly<{ id: string }>) => {
  return (
    <div>
      <div>TodoView</div>
      <div>{id}</div>
    </div>
  )
}
