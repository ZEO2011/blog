import Link from "next/link"
import Comment from "./_components/comment"
import { getPost } from "@/db/posts"
import { getUser } from "@/db/users"
import { getPostComments } from "@/db/comments"
import { notFound } from "next/navigation"

async function handleRequests(id: number) {
    const post = await getPost(id)
    if (!post) notFound() 
    const user = await getUser(post.userId)
    if (!user) notFound() 
    const comments = await getPostComments(id)
    return { post, user, comments }
}

export default async function Post({ params: { id } }: { params: { id: string } }) {
    const { post: { title, body, userId }, user: { name }, comments } = await handleRequests(Number(id))
    return (
        <div className="container">
            <h1 className="page-title">
                {title}
                <div className="title-btns">
                    <Link
                        className="btn btn-outline"
                        href={`/posts/${id}/edit`}
                    >
                        Edit
                    </Link>
                </div>
            </h1>
            <span className="page-subtitle">
                By:{" "}
                <Link
                    href={`/users/${userId}`}
                >
                    {name}
                </Link>
            </span>
            <div>{body}</div>
            <h3 className="mt-4 mb-2">Comments</h3>
            <div className="card-stack">{comments.map(comment => <Comment key={comment.id} {...comment} />)}</div>
        </div>
    )
}
