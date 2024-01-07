import { usePathname, useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function useSubmitForm() {
    const router = useRouter()
    const pathname = usePathname()
    function use(event: FormEvent) {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        const query = formData.get("query") as string | null ?? ""
        const userId = formData.get("userId") as string | null ?? ""
        router.push(`${pathname}?${new URLSearchParams({ query, userId }).toString()}`)
    }
    return { use }
}
