import { useState } from "react"
import ProfileInput from "../ProfileInput/ProfileInput"

function Profile() {
    const [profile, setProfile] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
    });

    function handleInputChange(e) {
        const {name, value} = e.target;
        setProfile({...profile, [name]: value});
    }
    
    return (
        <div>
            <ProfileInput type="text" placeholder={"first name"}
             handleInputChange={handleInputChange} value={profile.firstName}/>

            <ProfileInput type="text" placeholder={"last name"}
             handleInputChange={handleInputChange} value={profile.lastName}/>

            <ProfileInput type="tel" placeholder={"phone number"} handleInputChange={handleInputChange}/>
            <ProfileInput type="email" placeholder={"email"}/>
        </div>
    )
}

export default Profile