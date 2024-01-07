import { getUsers } from "@/db/users";
import { ComponentPropsWithoutRef, PropsWithoutRef } from "react";

export default async function UserSelect({ allOption = true, ...restProps }: { allOption?: boolean } & PropsWithoutRef<ComponentPropsWithoutRef<"select">>) {
    const users = await getUsers()
    return (
        <select {...restProps}>
            {allOption && <option value="">All</option>}
            {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
        </select>
    )
}
