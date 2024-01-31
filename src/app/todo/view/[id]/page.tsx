import { TodoView } from '@/components/todo/TodoView'

const TodoPage = ({ params }: Readonly<{ params: { id: string } }>) => {
  return <TodoView id={params.id} />
}

export default TodoPage
