import UserSelect from "@/components/user-select"
import Link from "next/link"
import FormBtn from "@/components/form-btn"
import { createPost } from "@/actions/posts";

export default function Page() {
    return (
        <>
            <h1 className="page-title new-page-title">New Post</h1>
            <form action={createPost} method="POST">
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="title">
                            Title
                        </label>
                        <input
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
                        <UserSelect allOption={false} name="userId" />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="body">
                            Body
                        </label>
                        <textarea
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
