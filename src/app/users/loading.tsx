import SkeletonPost from "../posts/_components/skeleton-post";

export default function Loading() {
    return (
        <div className="container">
            <h1 className="page-title">users</h1>
            <h3>posts</h3>
            <div className="card-grid">
                {Array.from({ length: 20 }).map((_, index) => <SkeletonPost key={index} />)}
            </div>
            <h3>todos</h3>
            <ul>
                {Array.from({ length: 20 }).map((_, index) => <SkeletonPost key={index} />)}
            </ul>
        </div>
    )
}
