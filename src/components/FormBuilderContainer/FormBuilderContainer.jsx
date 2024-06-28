import Profile from "../Profile/Profile";
import Output from "../Output/Output";
import "./FormBuilderContainer.css";
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
        <div id="form-container">
            <Profile profile={profile} handleInputChange={handleInputChange}/>
            <Output profile={profile}/>
        </div>
    )
}

export default FormBuilderContainer;