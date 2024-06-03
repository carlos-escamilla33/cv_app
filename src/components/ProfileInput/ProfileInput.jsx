
function ProfileInput({type, placeholder, handleFirstName }) {
    
    return (
        <input type={type} placeholder={placeholder} onChange={handleFirstName}/>
    )
}

export default ProfileInput