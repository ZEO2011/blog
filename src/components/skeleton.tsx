export function Skeleton({ short }: { short?: boolean }) {
    return (
        <div
            className="skeleton"
            style={{ width: short ? "15em" : undefined }}
        />
    )
}

export function SkeletonBtn() {
    return <div className="skeleton skeleton-btn" />
}

export function SkeletonComment() {
    return (
        <div className="card">
            <div className="card-body">
                <div className="text-sm mb-1">
                    <Skeleton short />
                </div>
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </div>
        </div>
    )
}
