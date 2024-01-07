import { SkeletonComment } from "@/components/skeleton";

export default function SkeletonComments() {
    return Array.from({ length: 6 }).map((_, index) => <SkeletonComment key={index} />)
}
