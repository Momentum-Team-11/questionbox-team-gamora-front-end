import axios from "axios";
import { useState } from "react";
// import { requestLogin } from "../AjaxRequests";

export const Login = () => {
    const loginURL = "https://dj-questionbox.herokuapp.com/api/auth/token/login";
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [token, setToken] = useState("");

    
    const handleLogin = (e) => {
        e.preventDefault();
        setError("");
        axios
            .post(loginURL, {
                username: username,
                password: password,
            })
            .then((response) => {
                console.log(response.data);
                setToken(username, response.data.auth_token);
            })
            .catch((e) => setError(e.message));
            console.log(username);
            console.log(password);
            console.log(token);
        };

    return (
    <div className="loginDiv">
    <h1>Access your Box</h1>
        {error && <div className="errorDiv">{error}</div>}
        <form onSubmit={handleLogin}>
        <label className="usernameLabel">
            Username
        </label>
        <input
            type="text"
            id="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <div className="passwordDiv">
        <label className="passwordLabel">
            Password
        </label>
        <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <div className="subButt">
            <button type="submit">Log In</button>
        </div>
        </form>
        </div>
    )};
