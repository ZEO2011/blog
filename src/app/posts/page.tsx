import { getPosts } from "@/db/posts";
import Post from "./_components/post";
import SearchForm from "./_components/search-form";
import Link from "next/link";
import UserSelect from "@/components/user-select";

interface PostsProps {
    searchParams: {
        query?: string
        userId?: string | number
    }
}

export default async function Posts({ searchParams }: PostsProps) {
    const posts = await getPosts(searchParams)
    return <div className="container">
        <h1 className="page-title">
            posts
            <div className="title-btns">
                <Link className="btn btn-outline" href="/posts/new">
                    New
                </Link>
            </div>
        </h1>
        <SearchForm queryValue={searchParams.query}>
            <UserSelect name="userId" defaultValue={searchParams.userId} />
        </SearchForm>
        <div className="card-grid">
            {posts.map(post => <Post key={post.id} {...post} />)}
        </div>
    </div>
}
