import "./Output.css";

// const [profile, setProfile] = useState({
    // firstName: "",
    // lastName: "",
    // phoneNumber: "",
    // email: "",
    // schoolName: "",
    // major: "",
// });

function Output({profile}) {
    return(
        <div className="output-container">
            <p>{profile.firstName}</p>
            <p>{profile.lastName}</p>
            <p>{profile.phoneNumber}</p>
            <p>{profile.email}</p>
            <p>{profile.schoolName}</p>
            <p>{profile.major}</p>
        </div>
    )
}

export default Output