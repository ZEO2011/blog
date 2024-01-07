import { Post } from "@prisma/client"
import Link from "next/link"

export default function Post({title, body, id}: Post) {
    return (
        <div className="card">
            <div className="card-header">{title}</div>
            <div className="card-body ">
                <div className="card-preview-text">{body}</div>
            </div>
            <div className="card-footer">
                <Link className="btn" href={`/posts/${id}`}>
                    View
                </Link>
            </div>
        </div>
    )
}


