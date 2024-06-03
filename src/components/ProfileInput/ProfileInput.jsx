import "./ProfileInput.css";

function ProfileInput({type, placeholder, name, handleInputChange, value }) {

    return (
        <div>
            <input className="profile-input"
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={handleInputChange}
                value={value} 
            />
        </div>
    )
}

export default ProfileInput