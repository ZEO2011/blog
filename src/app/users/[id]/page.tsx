import Post from "@/app/posts/_components/post"
import Todo from "@/app/todos/_components/todo"
import { getPosts } from "@/db/posts"
import { getTodos } from "@/db/todos"
import { getUser } from "@/db/users"
import { notFound } from "next/navigation"

async function handleRequests(id: number) {
    const user = await getUser(id)
    if (!user) notFound()
    const todos = await getTodos()
    const posts = await getPosts()
    return { user, todos, posts }
}


export default async function User({ params: { id } }: { params: { id: string } }) {
    const { user: { name, website, companyName, street, suite, city, zipcode }, posts, todos } = await handleRequests(Number(id))
    return <div className="container">
        <h1 className="page-title">
            {name}
        </h1>
        <div className="page-subtitle">
            {website}
        </div>
        <div>
            <b>Company:</b> {companyName}
        </div>
        <div>
            <b>Website:</b> {website}
        </div>
        <div>
            <b>Address:</b>{" "}
            {street}, {suite}, {city}, {zipcode}
        </div>
        <h3 className="mt-4 mb-2">Posts</h3>
        <div className="card-grid">
            {posts.map(post => <Post key={post.id} {...post} />)}
        </div>
        <h3 className="mt-4 mb-2">Todos</h3>
        <ul>
            {todos.map(todo => <Todo key={todo.id} {...todo} />)}
        </ul>
    </div>
}
