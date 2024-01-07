import SkeletonComments from "./_components/skeleton-comments";
import SkeletonPost from "./_components/skeleton-post";

export default function Loading() {
    return <div className="container">
        <SkeletonPost />
        <h3>comments</h3>
        <SkeletonComments />
    </div>
}
