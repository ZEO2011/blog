import { cache } from "react"
import prisma from "./db"

export async function getTodos() {
    return prisma.todo.findMany()
}

export const getUserTodos = cache((userId: string | number) => {
    return prisma.todo.findMany({ where: { userId: Number(userId) } })
})

