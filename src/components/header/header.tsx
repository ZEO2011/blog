import Link from "next/link";

export default function Header() {
    return <nav className="top-nav">
        <div className="nav-text-large">blog</div>
        <ul className="nav-list">
            <li>
                <Link href="/posts">Posts</Link>
            </li>
            <li>
                <Link href="/users">Users</Link>
            </li>
            <li>
                <Link href="/todos">todos</Link>
            </li>
        </ul>
    </nav>
}
