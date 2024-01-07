import { Todo } from "@prisma/client";

export default function Todo({title, completed}: Todo) {
    return <li className={completed ? "strike-through" : ""}>{title}</li>
}
