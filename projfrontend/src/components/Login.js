import React, { useState } from 'react';
import avatar from '../assets/avatar.png';
import './style.css';
import { Redirect } from 'react-router';
import { isAuthenticated, login, authenticate } from '../auth/helper/index';

const Login=()=>{
    const [values,setValues]=useState({
        email:"",
        password:"",
        error:"",
        loading:false,
        didRedirect:false
    })

    const {email, password, error, loading, didRedirect}=values;
    const {user}=isAuthenticated();

    const handleChange=name=>event=>{
        setValues({...values,error:false, [name]:event.target.value})
    }

    const onSubmit=event=>{
        event.preventDefault();
        setValues({...values,error: false,loading: true})
        login({email,password})
            .then(data=>{
                if(data.error)
                setValues({...values,error: data.error,loading: false})
                else{
                    authenticate(data,()=>{
                        setValues({...values,didRedirect:true})
                        console.log(data);
                    })
                }
            })
            .catch(err=>console.log("signin failed"));
    }

    const performRedirect=()=>{
        if(didRedirect)
        {
            if(user&&user.role==4)
            {
                return <p classNameName="text-white text-center">Redirect to admin</p>
            }
            else{
                return <Redirect to="/" />;
            }
        }
        if(isAuthenticated())
        {
            return <Redirect to="/" />
        }

    }
    return(<div><div className="loginbox">
    <img src={avatar} className="avatar" />
        <h1>Login Here</h1>
        <form>
            <p>Email</p>
            <input type="text"value={email} placeholder="Enter Email" onChange={handleChange("email")}/>
            <p>Password</p>
            <input type="password" value={password} placeholder="Enter Password" onChange={handleChange("password")} />

            <input type="submit" name="" value="Sign Up" onClick={onSubmit}/>

            <a href="#">Lost your password?</a><br />
            <a href="login.html"> have an account Login Here?</a>
        </form>

    </div>
    {performRedirect()}
</div>);
}
export default Login;
