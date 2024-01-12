import React, { useState } from 'react'
import axios from 'axios'
import './reg.css'
import { useNavigate } from 'react-router-dom'
import { checkUserEmail } from '../../JsonOp/api';
const RegForm = () => {
    let nevigate = useNavigate();

    let post_api = "http://localhost:1000/product"
    let [input, setInput] = useState({
        fullname: "",
        email: "",
        password: "",

    })
    let changeH = (e) => {
        e.persist();
        let { name, value } = e.target
        setInput({ ...input, [name]: value })

    }
    let submitH = async (e) => {
        e.preventDefault();
        console.log("collect data", input);
        const isUserExist = await checkUserEmail(input.email);
        if (isUserExist) {
            alert("This email is already exist")
            return
        }
        let p = {
            username: input.fullname,
            email: input.email,
            password: input.password,



        }

        axios.post(post_api, p)
            .then(res => {

                alert("Registration Done")
                console.log("add res", res);
                nevigate("/login_form")
            })
            .catch(err => {
                alert("Error in data")
                console.log("add err", err);

            })

    }


    return (
        <div className='loginContainer1'>
            <h1 className='headerTitle'>Registration Form</h1>
            <form onSubmit={submitH} className='formContainer'>
                <div className='inputContainer'>
                    <label htmlFor='fullname'>NAME</label>
                    <input className='customInput' type="text" name="fullname" id='' onChange={changeH} />
                </div>
                <div className='inputContainer'>
                    <label htmlFor='email'>EMAIL</label>
                    <input className='customInput' type="email" name="email" id='' onChange={changeH} />
                </div>
                <div className='inputContainer'>
                    <label htmlFor='password'>PASSWORD</label>
                    <input className='customInput' type="text" name="password" id='' onChange={changeH} />
                </div>
                <input type='submit' value='Sign up' className='customSubmit' />

            </form>
        </div>
    )
}

export default RegForm