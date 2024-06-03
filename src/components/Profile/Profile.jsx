import { useState } from "react"
import ProfileInput from "../ProfileInput/ProfileInput"

function Profile() {
    const [profile, setProfile] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
    });



    function submitForm() {

    }

    return (
        <form action={submitForm}>

        </form>
    )
}

export default Profile