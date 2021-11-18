import MeetupDetails from "../components/meetups/MeetupDetails";

export default function MeetupDetailPage() {
    return (
        <MeetupDetails
            image='https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80'
            title=' meetup 1'
            adress='adress'
            description='first meetup'
        />
    )
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1'
                },
            },
            {
                params: {
                    meetupId: 'm2'
                },
            },
        ]
    }
}

export async function getStaticProps(context) {

    const meetupId = context.params.meetupId

    return {
        props: {
            meetupData: {
                id: meetupId,
                title: 'meetup 1',
                image: 'https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80',
                adress: 'adress',
                description: 'first meetup'
            },
        }
    }
}