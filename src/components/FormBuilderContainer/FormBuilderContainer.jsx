import Profile from "../Profile/Profile";
import Output from "../Output/Output";
import { useState } from "react";

function FormBuilderContainer() {
    const [profile, setProfile] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        schoolName: "",
        major: "",
    });

    function handleInputChange(e) {
        const {name, value} = e.target;
        setProfile({...profile, [name]: value});
    }

    return (
        <div>
            <Profile profile={profile} handleInputChange={handleInputChange}/>
            <Output />
        </div>
    )
}

export default FormBuilderContainer;