// import axios from 'axios'
import './login.css'
import React, { useState } from 'react'
import { checkLogin } from '../../JsonOp/api'
import { useNavigate } from 'react-router-dom'
const LogIn = () => {

  const nevigate = useNavigate()

  // let get_api = "http://localhost:1000/product"

  let [state, setState] = useState({
    email: "",
    password: ""
  })
  let changeH = (e) => {
    e.persist();
    let { name, value } = e.target
    setState({ ...state, [name]: value })
  }
  // let submitH = async (e) => {
  //   e.preventDefault();
  //   const userLogin = await checkLogin(state.email, state.password)
  //   if (userLogin) {
  //     localStorage.setItem("username",userLogin.username)
  //     nevigate("/")
  //   }
  //   else{
  //     alert("Log in failed")
  //   }

  // }



  const submitH = (e) => {
    e.preventDefault();
    checkLogin(state.email, state.password)
      .then(res => {
        if (res) {
          localStorage.setItem("username", res.username)
          nevigate("/product_page")
        }
        else {
          alert("Log in failed")
        }

      })

  }

  return (
    <div className='loginContainer'>

      <h1 className='headerTitle'>People Connect</h1>

      <form onSubmit={submitH} className='formContainer'>
        <div className='inputContainer'>
          <label htmlFor='email'>EMAIL</label>
          <input className='customInput' type="email" name="email" id='' onChange={changeH} />
        </div>
        <div className='inputContainer'>
          <label htmlFor='password'>PASSWORD</label>
          <input className='customInput' type="text" name="password" id='' onChange={changeH} />
        </div>
        <input type='submit' value='Log in' className='customSubmit' />
      </form>

    </div>
  )
}

export default LogIn