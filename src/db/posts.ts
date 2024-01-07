import { Post, Prisma } from "@prisma/client"
import prisma from "./db"
import { cache } from "react"

export const getPosts = cache(({
    query,
    userId,
}: {
    query?: string
    userId?: string | number
} = {}) => {
    const where: Prisma.PostFindManyArgs["where"] = {}
    if (query) {
        where.OR = [{ title: { contains: query } }, { body: { contains: query } }]
    }

    if (userId && userId !== "0") {
        where.userId = Number(userId)
    }

    return prisma.post.findMany({ where })
})

export const getPost = cache((postId: string | number) => {
    return prisma.post.findUnique({ where: { id: Number(postId) } })
})


export const getUserPosts = cache((userId: string | number) => {
    return prisma.post.findMany({ where: { userId: Number(userId) } })
})

export function postPost(post: Omit<Post, "id">) {
    return prisma.post.create({ data: post })
}

export function patchPost(id: number, post: Partial<Post>) {
    return prisma.post.update({ where: { id }, data: post })
}
