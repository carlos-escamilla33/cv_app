import ProfileInput from "../ProfileInput/ProfileInput"

function Profile({profile, handleInputChange}) {
    
    
    return (
        <div>
            <ProfileInput type="text" placeholder="firstName" name="firstName"
             handleInputChange={handleInputChange} value={profile.firstName}/>

            <ProfileInput type="text" placeholder={"last name"} name="lastName"
             handleInputChange={handleInputChange} value={profile.lastName}/>

            <ProfileInput type="tel" placeholder={"phone number"} name="phoneNumber"
             handleInputChange={handleInputChange} value={profile.phoneNumber}/>

            <ProfileInput type="email" placeholder={"email"} name="email"
             handleInputChange={handleInputChange} value={profile.email}/>
        </div>
    )
}

export default Profile