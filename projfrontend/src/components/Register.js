import React, { useState } from 'react';
import avatar from '../assets/avatar.png';
import './style.css';
import { Redirect } from 'react-router';
import {register  } from '../auth/helper/index';


const Register=()=>{
        const [values, setValues] = useState({
            username:"",
            email:"",
            password:"",
            error:"",
            success:false
        });
    
        const {username, email, password, error, success}=values;
    
        const handleChange=name=>event=>{
            setValues({...values,error:false, [name]:event.target.value})
        }
    
        const onSubmit=event=>{
            event.preventDefault();
            setValues({...values,error:false});
            register({username,email,password})
            .then(data=>{
                if(data.error)
                setValues({...values, error:data.error, success:false})
                else
                setValues({
                    ...values,
                    username:"",
                    email:"",
                    password:"",
                    error:"",
                    success:true});
                    <Redirect path="/Login"></Redirect>
            }
            )
            .catch(err=>console.log("Error in Signup"));
        };
    
        const performRedirect=()=>{
            if(success)
            {
                return <Redirect to="/Login" />;
            }
            else{
                return <Redirect to="/Register" />;
            }
    
    
        }
    return(<div><div className="loginbox">
    <img src={avatar} className="avatar" />
        <h1>Register Here</h1>
        <form>
            <p>Username</p>
            <input type="text" value={username} placeholder="Enter Username" onChange={handleChange("username")} />
            <p>Email</p>
            <input type="text" value={email} placeholder="Enter Email" onChange={handleChange("email")}/>
            <p>Password</p>
            <input type="password" value={password} placeholder="Enter Password" onChange={handleChange("password")}/>

            <input type="submit" name="" value="Sign Up" onClick={onSubmit}/>

            <a href="#">Lost your password?</a><br />
            <a href="login.html"> have an account Login Here?</a>
        </form>

    </div>
    {performRedirect()}
</div>);
}
export default Register;
