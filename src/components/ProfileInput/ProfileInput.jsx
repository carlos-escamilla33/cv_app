import "./ProfileInput.css";

function ProfileInput({type, placeholder, name, handleInputChange, value }) {

    return (
        <input className="profile-input"
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={handleInputChange}
            value={value} 
        />
    )
}

export default ProfileInput