
function ProfileInput({type, placeholder, name, handleInputChange, value }) {

    return (
        <input type={type} placeholder={placeholder} name={name}
         onChange={handleInputChange} value={value}/>
    )
}

export default ProfileInput