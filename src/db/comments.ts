import { cache } from "react"
import prisma from "./db"

export const getPostComments = cache((postId: string | number) => {
    return prisma.comment.findMany({ where: { postId: Number(postId) } })
})
