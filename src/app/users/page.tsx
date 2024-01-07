import { getUsers } from "@/db/users"
import User from "./_components/user"

export default async function Users() {
    const users = await getUsers()
    return <div className="container"><h1 className="page-title">Users</h1> <div className="card-grid">{users.map(user => <User key={user.id} {...user} />)}</div></div>
}
