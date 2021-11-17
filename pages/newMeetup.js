import NewMeetupFrom from '../components/meetups/NewMeetupForm'

export default function NewMeetupPage() {
    function addMeetupHandler(enteredMeetupData) {
        console.log(enteredMeetupData)
    }

    return <NewMeetupFrom onAddMeetup={addMeetupHandler} />
}
