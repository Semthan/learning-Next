import MeetupList from "../components/meetups/MeetupList";

const meetups = [
    {
        id: 'm1',
        title: 'meetup 1',
        image: 'https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80',
        adress: 'adress',
        description: 'first meetup'
    },
    {
        id: 'm2',
        title: 'meetup 2',
        image: 'https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80',
        adress: 'adress',
        description: 'second meetup'
    },
]

export default function HomePage(props) {
    return (
        <MeetupList meetups={props.meetups} />
    )
}

export async function getStaticProps() {
    return {
        props: {
            meetups: meetups
        },
        revalidate: 1
    }
}
