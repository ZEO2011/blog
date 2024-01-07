import Header from '@/components/header/header'
import './styles.css'
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'blog post',
}

export const revalidate = 5;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
            </body>
        </html>
    )
}
