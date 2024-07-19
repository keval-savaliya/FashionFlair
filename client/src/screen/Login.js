import React from 'react'
import { useState } from 'react';
import { UseDispatch, useDispatch, useSelector } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { Link, useNavigate } from 'react-router-dom'
import './login.css'
import Navbar from '../components/Navbar'
import xyzcookie from 'js-cookie'
import OAuth from '../components/OAuth';

export default function Login() {

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password
        })
      });

      const json = await response.json();
      console.log(json);

      if (response.status === 400) {
        alert("Enter valid credentials");
      } else if (!response.ok) {
        throw new Error('Login failed');
      } else {
        const isAdmin = json.isAdmin;
        const email = json.email;
        localStorage.setItem("email", email)
        localStorage.setItem("isAdmin", isAdmin)
        localStorage.setItem("authToken", json.authToken);
        dispatch(signInSuccess(json));
        alert("Login Successful");
        if (json.isAdmin === true) {
          navigate('/admin-home')
        } else {
          navigate('/home')
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed. Please try again later.");
    }
  };


  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div class="bg-img">
        <div class="content">
          <header>Login Form</header>
          <form onSubmit={handleSubmit}>
            <div class="field">
              <span class="fa fa-user"></span>
              <input type="email" class="pass-key" required placeholder="Email" className="form-control" name='email' value={credentials.email} onChange={onchange} />
            </div>
            <div class="field space">
              <span class="fa fa-lock"></span>
              <input type="password" class="pass-key" required placeholder="Password" className="form-control" name='password' value={credentials.password} onChange={onchange} />
              <span class="show">SHOW</span>
            </div>
            <div class="pass">
              <a href="#">Forgot Password?</a>
            </div>
            <div class="field">
              <input type="submit" value="LOGIN" />
            </div>
          </form>
          <div>
            <OAuth />
          </div>
          <div class="login">
            Or login with
          </div>
          <div class="links">
            <div class="facebook">
              <i class="fab fa-facebook-f"><span>Facebook</span></i>
            </div>
            <div class="instagram">
              <i class="fab fa-instagram"><span>Instagram</span></i>
            </div>
          </div>
          <div class="signup">
            Don't have account?
            <Link to="/createuser">Signup Now</Link>
          </div>
        </div>
      </div>
    </>
  )
}
