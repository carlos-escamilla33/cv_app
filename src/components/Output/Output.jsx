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
                <p>{profile.phoneNumber} || {profile.email}</p>
            </div>
            <hr />
            <div className="tech-skills">
                <h2>Tech Skills</h2>
            </div>
            <hr />
            <div className="projects">
                <h2>Projects</h2>
            </div>
            <hr />
            <div className="education">
                <h2>Education</h2>
                <p>{profile.schoolName}</p>
                <ul>
                    <li>{<p>{profile.major}</p>}</li>
                </ul>
            </div>
        </div>
    )
}

export default Output