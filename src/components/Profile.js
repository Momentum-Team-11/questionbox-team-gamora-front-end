import { useState  } from "react";
import UserData from "./UserData";


const Profile = ({ user, firstName, lastName, bio, location }) => {
    const profiles = UserData
    // const [loggedIn, setLoggedIn] = useState(null)
    return (
        <>
        
        {profiles.map((profile, idx) => {
        return(
        <Profile
        user={user}
        firstName={firstName}
        lastName={lastName}
        bio={bio}
        location={location}
        key={idx}
        />
    )}
    )}
    </>
)};