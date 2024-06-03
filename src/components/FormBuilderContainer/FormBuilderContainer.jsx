import Profile from "../Profile/Profile";
import { useState } from "react";

function FormBuilderContainer() {
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
            <Profile profile={profile} handleInputChange={handleInputChange}/>
        </div>
    )
}

export default FormBuilderContainer;