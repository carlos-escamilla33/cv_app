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
            <div className="header">  
                <h1 className="name">{profile.firstName} {profile.lastName}</h1>
                <p>{profile.phoneNumber}</p>
                <p>{profile.email}</p>
            </div>
            <div className="education">
                <p>{profile.schoolName}</p>
                <ul>
                    <li>{<p>{profile.major}</p>}</li>
                </ul>
            </div>
        </div>
    )
}

export default Output