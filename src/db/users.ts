import { cache } from "react"
import prisma from "./db"

export const getUsers = cache(() => {
    return prisma.user.findMany()
})

export const getUser = cache((userId: string | number) => {
    return prisma.user.findUnique({ where: { id: Number(userId) } })
})
