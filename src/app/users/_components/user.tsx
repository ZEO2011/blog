import { User } from "@prisma/client";
import Link from "next/link";

export default function User({ id, name, website, email, companyName }: User) {
    return (
        <div key={id} className="card">
            <div className="card-header">{name}</div>
            <div className="card-body">
                <div>{companyName}</div>
                <div>{website}</div>
                <div>{email}</div>
            </div>
            <div className="card-footer">
                <Link className="btn" href={`/users/${id}`}>
                    View
                </Link>
            </div>
        </div>
    )
}
