import { useRouter } from "next/dist/client/router"

export default function portfolioProjectPage() {

    const router = useRouter()

    console.log(router.pathname)
    console.log(router.query)

    return (
        <div>
            <h1>The Portfolio Project Page</h1>
        </div>
    )
}
