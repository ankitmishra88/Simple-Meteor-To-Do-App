import React,{useState} from 'react'


export const LoginForm=()=>{
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    const submit=e=>{
        e.preventDefault();

        Meteor.loginWithPassword(username, password);
    }

    return (
        <form onSubmit={submit} className="login-form">
            <div>
            <label htmlFor="username">Username</label>
            <input type="text" onChange={(e)=>setUsername(e.target.value)} name="username" id="username"/>
            <label htmlFor="password">Password</label>
            <input type="password" onChange={e=>setPassword(e.target.value)} name="password" id="password"/>
            <button type="submit">Log In</button> 
            </div>
            
        </form>
    )
}