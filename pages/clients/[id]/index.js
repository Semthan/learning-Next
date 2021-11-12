import { useRouter } from "next/router"

export default function clientProjectsPage() {
    const router = useRouter()

    function loadProjectHandler() {
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: { id: '1', clientprojectid: 'projecta' }
        })
    }
    return (
        <div>
            <h1>The projects of a given client</h1>
            <button onClick={loadProjectHandler}>Load project A</button>
        </div>
    )
}
