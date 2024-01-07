import { Comment } from "@prisma/client";

export default function Comment({ email, body }: Comment) {
    return (
        <div className="card">
            <div className="card-body">
                <div className="text-sm mb-1">
                    {email}
                </div>
                {body}
            </div>
        </div>
    )
}

