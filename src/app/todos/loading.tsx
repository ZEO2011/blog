import { Skeleton } from "@/components/skeleton"

export default function Loading() {
    return (
        <div className="container">
            <h1 className="page-title">todos</h1>
            <ul>
                {Array.from({ length: 20 }).map((_, index) => <Skeleton short key={index} />)}
            </ul>
        </div>
    )
}
