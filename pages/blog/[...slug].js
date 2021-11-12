import { useRouter } from "next/dist/client/router"

export default function BlogPostsPage() {

    const router = useRouter()

    console.log(router.query)

    return (
        <div>
            <h1>The blog Posts</h1>
        </div>
    )
}
