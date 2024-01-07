import { getTodos } from "@/db/todos"
import Todo from "./_components/todo"

export default async function Todos() {
    const todos = await getTodos()
    return <div className="container"><h1 className="page-title">todos</h1><ul>{todos.map(todo => <Todo key={todo.id} {...todo} />)}</ul></div>
}
