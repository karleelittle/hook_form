import React, { useState } from "react";

const Form = (props) => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword] = useState("");

    return (
        <div>
            <form style={{ marginTop: "50px "}}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" onChange={ (e) => setFirstName(e.target.value) }/>
                </div>

                <div>
                    <label htmlFor="LastName">Last Name</label>
                    <input type="text" name="LastName" onChange={ (e) => setLastName(e.target.value) }/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" onChange={ (e) => setEmail(e.target.value) }/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={ (e) => setPassword(e.target.value) }/>
                </div>
                <div>
                    <label htmlFor="confirmPassword">Email</label>
                    <input type="password" name="confirmPassword" onChange={ (e) => setConfirmPassword(e.target.value) }/>
                </div>
            </form>

            <div>
                <h2>Your Form Data</h2>
                <p> 
                    <label>First Name: </label>{ firstName }
                </p>
                <p>
                    <label>Last Name:</label>{ lastName }
                </p>
                <p>
                    <label>Email:</label>{ email }
                </p>
                <p>
                    <label>Password:</label>{ password }
                </p>
                <p>
                    <label>Confirm Password:</label>{ confirmPassword }
                </p>
            </div>
        </div>
    )
}
export default Form;
