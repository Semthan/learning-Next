import Link from 'next/link'

export default function clientsPage() {

    const clients = [
        { id: "0", name: "maxano" },
        { id: "1", name: "semthan" },
        { id: "2", name: "giff" },
    ]

    return (
        <div>
            <h1>The Clients page</h1>
            <ul>
                {clients.map((client) => (
                    <li key={client.id}>
                        <Link href={`/clients/${client.id}`}>{client.name}</Link>
                        {/*                         <Link
                            href={{
                                pathname: "clients/[id]",
                                query: { id: client.id }
                            }}
                        >
                            {client.name}
                        </Link> */}
                    </li>
                ))}
            </ul>
        </div>
    )
}
