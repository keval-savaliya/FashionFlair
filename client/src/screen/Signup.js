import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import loginimg from '../Images/login2.png'
// import './signup.css'
import OAuth from '../components/OAuth';

export default function Signup() {

    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", location: "" });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.location, contactno: "", address: "", pincode:"", state:"", city:""})
        })
        const json = await response.json();
        console.log(json)
        navigate('/home')
        if (!json.success) {
            alert("Enter valid credentials")
        }
    }

    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
            {/* <div className='container'>
                <div className='row'>
                    <div className='col' style={{ backgroundColor: "#4d2e22" }}>
                        <img src={loginimg} />
                    </div>
                    <div className='col' style={{ backgroundColor: "#4d2e22", width: "50%", color: "#dcd2c7" }}>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3" style={{ color: "#dcd2c7" }}>
                                <label htmlFor="name" >Name</label>
                                <br />
                                <input type="text" className="input" name='name' value={credentials.name} onChange={onchange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" name='email' value={credentials.email} onChange={onchange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" name='password' value={credentials.password} onChange={onchange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="location" className="form-label">Location</label>
                                <input type="text" className="form-control" name='location' value={credentials.location} onChange={onchange} />
                            </div>
                            <button type="submit" className=" m-3 btn btn-success" onClick={handleSubmit}>Submit</button>
                            <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
                        </form>
                    </div>
                </div>
            </div> */}

            <div class="bg-img">
                <div class="content">
                    <header>SignUp Form</header>
                    <form onSubmit={handleSubmit}>
                        <div class="field space">
                            <span class="fa fa-user"></span>
                            <input type="text" class="pass-key" required placeholder="Username" className="form-control col-6" name='name' value={credentials.name} onChange={onchange} />
                        </div>
                        <div class="field space">
                            <span class="fa fa-user"></span>
                            <input type="email" class="pass-key" required placeholder="Email" className="form-control col-6" name='email' value={credentials.email} onChange={onchange} />
                        </div>
                        <div class="field space">
                            <span class="fa fa-lock"></span>
                            <input type="password" class="pass-key" required placeholder="Password" className="form-control col-6" name='password' value={credentials.password} onChange={onchange} />
                            <span class="show">SHOW</span>
                        </div>
                        <div class="field space">
                            <span class="fa fa-user"></span>
                            <input type="location" class="pass-key" required placeholder="Location" className="form-control col-6" name='location' value={credentials.location} onChange={onchange} />
                        </div>
                        <div class="pass">
                            <a href="#">Forgot Password?</a>
                        </div>
                        <div class="field">
                            <input type="submit" value="SIGNUP" onClick={handleSubmit} />
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
                        Already a User?
                        <Link to="/login">Login Now</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
