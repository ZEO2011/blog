import { editPost } from "@/actions/posts";
import FormBtn from "@/components/form-btn";
import UserSelect from "@/components/user-select";
import { getPost } from "@/db/posts";
import { getUser } from "@/db/users";
import { User } from "@prisma/client";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({ params: { id } }: { params: { id: string } }) {
    const post = await getPost(id)
    if (!post) notFound()
    const user = await getUser(post.userId) as User
    return (
        <>
            <h1 className="page-title new-page-title">Edit Post</h1>
            <form method="PATCH" action={async formData => { "use server"; await editPost(+id, formData) }}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="title">
                            Title
                        </label>
                        <input
                            defaultValue={post.title}
                            required
                            type="text"
                            name="title"
                            id="title"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="userId">
                            Author
                        </label>
                        <UserSelect defaultValue={String(user.id)} allOption={false} name="userId" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="body">
                            Body
                        </label>
                        <textarea
                            defaultValue={post.body}
                            required
                            name="body"
                            id="body"
                        ></textarea>
                    </div>
                </div>
                <div className="form-row form-btn-row">
                    <Link
                        className="btn btn-outline"
                        href=".."
                    >
                        Cancel
                    </Link>
                    <FormBtn />
                </div>
            </form>
        </>

    )

}
