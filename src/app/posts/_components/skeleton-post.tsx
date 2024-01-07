import { Skeleton, SkeletonBtn } from "@/components/skeleton";

export default function SkeletonPost() {
    return (
        <div className="card">
            <div className="card-header">
                <Skeleton short />
            </div>
            <div className="card-body">
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </div>
            <div className="card-footer">
                <SkeletonBtn />
            </div>
        </div>
    )
}
