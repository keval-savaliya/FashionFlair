import React from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../firebase';
import { useNavigate } from 'react-router-dom';

export default function OAuth() {

  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider)
      const res = await fetch('http://localhost:5000/api/googlesignup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: result.user.displayName, email: result.user.email, location: "India" })
      })
      const data = await res.json();

      console.log(data.token);
      if (res.status === 200) {
        localStorage.setItem("authToken", data.token);
        alert("Login Successful");
        navigate("/home");
      } else {
        alert("Login Unsuccessfull")
      }
    } catch (error) {
      console.log("Could not sign in with google", error);
    }
  }

  return (
    <>
      <div>
        <button onClick={handleGoogleClick} type='button' className='bg-danger text-white px-3 py-2 my-2' style={{ fontFamily: "Montserrat", fontWeight: "600", border: "none", letterSpacing: "1px", fontSize: "18px", width: "100%" }}>CONTINUE WITH GOOGLE</button>
      </div>
    </>
  )
}
// font - family: 'Montserrat', sans - serif;