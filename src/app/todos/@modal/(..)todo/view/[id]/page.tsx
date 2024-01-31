import React from 'react'

import { TodoView } from '@/components/todo/TodoView'
import { BackModal } from '@/components/ui/BackModal'

const TodoViewPage = ({ params: { id } }: { params: { id: string } }) => {
  return (
    <BackModal>
      <TodoView id={id} />
    </BackModal>
  )
}

export default TodoViewPage
