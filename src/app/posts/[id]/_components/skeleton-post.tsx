import { Skeleton, SkeletonBtn } from "@/components/skeleton";

export default function SkeletonPost() {
    return (
        <>
            <h1 className="page-title">
                <Skeleton short />
                <div className="title-btns">
                    <Skeleton />
                </div>
            </h1>
            <span className="page-subtitle">
                <SkeletonBtn />
            </span>
            <div>
                {Array.from({ length: 3 }).map((_, index) => <Skeleton key={index} />)}
            </div>
        </>
    )
}
