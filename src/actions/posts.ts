"use server"
import { patchPost, postPost } from "@/db/posts"
import { revalidatePath } from "next/cache"
import { permanentRedirect } from "next/navigation"

function getFormValues(formData: FormData) {
    const title = formData.get("title") as string
    const body = formData.get("body") as string
    const userId = +(formData.get("userId") as string)
    return { title, body, userId }
}

export async function createPost(formData: FormData) {
    const {title, body, userId} = getFormValues(formData)
    if (!title.length || !body.length) return;
    const data = await postPost({ title, body, userId })
    if (!data) throw new Error("Failed to create post")
    revalidatePath("/posts")
    permanentRedirect(`/posts/${data.id}`)
}

export async function editPost(id: number, formData: FormData) {
    const {title, body, userId} = getFormValues(formData)
    if (!title.length || !body.length) return;
    const data = await patchPost(id, { title, body, userId })
    if (!data) throw new Error("Failed to edit post")
    revalidatePath("/posts")
    permanentRedirect(`/posts/${data.id}`)
}
