"use client"

import { useFormStatus } from "react-dom"

export default function FormBtn() {
    const {pending} = useFormStatus()
    return (
        <button
            disabled={pending}
            className="btn"
        >
            {pending ? "Saving..." : "Save"}
        </button>
    )
}


