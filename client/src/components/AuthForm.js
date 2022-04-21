import React from 'react'

export default function AuthForm(props){

    const {
        handleChange, 
        handleSubmit,
        username,
        password,
        btnTxt
        }
    = props


    return (
    
        <form className="auth-form" onSubmit={handleSubmit}>
            <input className="just-inputs"

            type="text"
            name="username" 
            value={username} 
            onChange={handleChange} 
            placeholder="Username"/>

            <input 
            type="text" 
            name="password" 
            value={password} 
            onChange={handleChange} 
            placeholder="Password"/>
            <button id="submit-goal" class="btn btn-dark">{btnTxt}</button>
        </form>
        
    )
}
