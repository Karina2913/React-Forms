import { useState } from 'react'

//creating form, need to store form input values in state variables
export default function SignUpForm({ setToken }) {
    //state variables
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup"
                , {
                method: "POST",
                body: JSON.stringify({
                    username,
                    password,
                }),
                headers: {
                    "Content-Type": "application.json",
                },
            });
            const result = await response.json();
            console.log(result);
            setToken(result.token);
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div>
            <h2>Sign Up</h2>
            {error && <p>{error}</p>}

            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input value={username} onChange={(event) => 
                        setUsername(event.target.value)} />
                </label>
                <label>
                    Password: <input value={password} onChange={(event) =>
                        setPassword(event.target.value)} />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}