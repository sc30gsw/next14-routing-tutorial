'use client'

import { TodoEdit } from '@/components/todo/TodoEdit'
import { todoData } from '@/components/todo/TodoList'
import { BackModal } from '@/components/ui/BackModal'
import React from 'react'

const TodoEditPage = ({ params }: Readonly<{ params: { id: string } }>) => {
  const todo = todoData.find((todo) => todo.id === params.id)

  return (
    <BackModal>
      <TodoEdit title={todo?.title || ''} />
    </BackModal>
  )
}

export default TodoEditPage
