import SkeletonPost from "./_components/skeleton-post";

export default function Loading() {
    return (
        <div className="container"><h1 className="page-title">
            posts
        </h1>
            <div className="card-grid">
                {Array.from({ length: 6 }).map((_, index) => <SkeletonPost key={index} />)}
            </div>
        </div>
    )
}
