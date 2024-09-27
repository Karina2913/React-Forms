import { useState } from 'react'

export default function Authenticate ({ token }) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    const handleClick = async (event) => {
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            const result = await response.json();
            // if (!response.ok) {
            //     throw new Error("Whoops, there was an error!")
            // } else {
            //     setSuccessMessage(result.message);
            // }
            console.log(result);
            setSuccessMessage(result.message);
            } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div>
            <h2>Authenticate</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authenticate Token</button>    
        </div>
    );

}