import ProfileInput from "../ProfileInput/ProfileInput"
import "./Profile.css";

function Profile({profile, handleInputChange}) {
    
    
    return (
        <div id="profile-container">
            <ProfileInput type="text" placeholder={"firstName"} name="firstName"
             handleInputChange={handleInputChange} value={profile.firstName}/>

            <ProfileInput type="text" placeholder={"last name"} name="lastName"
             handleInputChange={handleInputChange} value={profile.lastName}/>

            <ProfileInput type="tel" placeholder={"phone number"} name="phoneNumber"
             handleInputChange={handleInputChange} value={profile.phoneNumber}/>

            <ProfileInput type="email" placeholder={"email"} name="email"
             handleInputChange={handleInputChange} value={profile.email}/>

             <ProfileInput type="text" placeholder={"schoolName"} name="schoolName"
              handleInputChange={handleInputChange} value={profile.schoolName}/>

              <ProfileInput type="text" placeholder={"major"} name="major"
              handleInputChange={handleInputChange} value={profile.major}/>
        </div>
    )
}

export default Profile