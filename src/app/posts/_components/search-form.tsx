"use client"
import { ReactNode } from "react";
import useSubmitForm from "./submitForm";

export default function SearchForm({ children, queryValue }: { children: ReactNode, queryValue: string | undefined }) {
    const searchForm = useSubmitForm()
    return (
        <form onSubmit={e => searchForm.use(e)} className="form mb-4" >
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="query">Query</label>
                    <input
                        defaultValue={queryValue ?? ""}
                        type="search"
                        name="query"
                        id="query"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="userId">Author</label>
                    {children}
                    <button className="btn">filter</button>
                </div>
            </div>
        </form >
    )
}
