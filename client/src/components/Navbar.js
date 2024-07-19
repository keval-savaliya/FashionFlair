import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../css/navbar.css'

export default function Navbar() {
  const navigate = useNavigate()
  return (


    <nav className='bg-white fixed-top py-lg-0 wow fadeIn' style={{ zIndex: "999" }}>
      <div className='d-flex' style={{ backgroundColor: "#9DC9F4" }}>
        <h5 className='ms-3 me-5 mt-1' style={{ fontFamily: "Playball", color: "#1D4265", fontWeight: "bold", fontSize: "40px" }}>Fashion Flair</h5>
        <input type="text" className='mt-2' placeholder="Search.." name="search" style={{ width: "500px", height: "40px" }} />
        <button type="submit" className='mt-2' style={{ height: "40px", backgroundColor: "#1D4265", width: "50px" }}><i class="fa fa-search" style={{ color: "#fff", }}></i></button>
        <div className='mt-3 ms-auto'>
          {/* <Link to='/login'>
            <i class='fa fa-user fs-3 mx-3' style={{ fontWeight: "bold", color: "#1D4265" }}></i>
          </Link> */}
          {/* <Link to='/login'>
            <i class='fa fa-heart fs-4 mx-3' style={{ fontWeight: "bold", color: "#1D4265" }}></i>
          </Link>
          <Link to='/login'>
            <i class='fa fa-shopping-bag fs-4 mx-3' style={{ fontWeight: "bold", color: "#1D4265" }}></i>
          </Link> */}
          {/* {
            (localStorage.getItem("authToken")) ?
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to="#" style={{ color: "#4d2e22" }}>My Orders</Link>
              </li>
              : ""
          } */}
          {!(localStorage.getItem("authToken"))
            ?
            <div className='d-flex'>
              <div className='mx-2'>
                <Link to='/createuser'>
                  <i class='fa fa-user fs-3 mx-3' style={{ fontWeight: "bold", color: "#1D4265" }}></i>
                </Link>
              </div>
              <div>
                <Link to='/login'>
                  <i class='fa fa-sign-in fs-2 mx-3' style={{ fontWeight: "bold", color: "#1D4265" }}></i>
                </Link>
              </div>
            </div>
            :
            <>
              <div className='d-flex'>
                <Link to='/cart'>
                  <i class='fa fa-shopping-bag fs-4 mx-3' style={{ fontWeight: "bold", color: "#1D4265" }}></i>
                </Link>
                <div onClick={() => {
                  localStorage.removeItem("authToken");
                  localStorage.removeItem("isAdmin");
                  localStorage.removeItem("email");
                  navigate("/home")
                }}><i class="fa fa-sign-out fs-3 mx-3" aria-hidden="true" style={{ fontWeight: "bold", color: "#1D4265" }}></i></div>
              </div>
            </>
          }

        </div>
      </div>
      <div className='d-flex justify-content-center' >
        <div class="navbar d-flex">
          <a href="/home" class="nav-item nav-link active">HOME</a>
          <a href="#product" class="nav-item nav-link active">PRODUCT</a>
          <a href="/about" class="nav-item nav-link">ABOUT</a>
          <a href="#gallery" class="nav-item nav-link">GALLERY</a>
          <a href="#video" class="nav-item nav-link">VIDEOS</a>
          <a href="#testimonial" class="nav-item nav-link">TESTIMONIAL</a>
          <a href="#contactus" class="nav-item nav-link">CONTACT US</a>
        </div>
      </div>
    </nav >

    // <nav class="navbar navbar-expand-lg bg-white navbar-light fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn"
    //   data-wow-delay="0.1s">
    //   <a href="index.html" class="navbar-brand d-block d-lg-none">
    //     <h1 class="text-primary fw-bold m-0">Grisha</h1>
    //   </a>
    //   <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
    //     <span class="navbar-toggler-icon"></span>
    //   </button>
    //   <div class="collapse navbar-collapse justify-content-between py-4 py-lg-0" id="navbarCollapse">
    //     <div class="navbar-nav ms-auto py-0">
    //       <a href="/home" class="nav-item nav-link active">Home</a>
    //       <a href="#aboutus" class="nav-item nav-link">About</a>
    //       <a href="#gallery" class="nav-item nav-link">Gallery</a>
    //       <a href="#service" class="nav-item nav-link">Objectives</a>
    //     </div>
    //     <a href="index.html" class="navbar-brand bg-secondary py-3 px-4 mx-3 d-none d-lg-block">
    //       <h1 class="text-primary fw-bold m-0">Grisha</h1>
    //     </a>
    //     <div class="navbar-nav me-auto py-0">
    //       <a href="#project" class="nav-item nav-link">Projects</a>
    //       <a href="#team" class="nav-item nav-link">Team</a>
    //       <a href="#testimonial" class="nav-item nav-link">Testimonial</a>
    //       <a href="#contact" class="nav-item nav-link">Contact</a>
    //     </div>
    //   </div>
    // </nav>
    // <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#dcd2c7' }}>
    //   <div className="container-fluid">
    //     <Link className="navbar-brand fs-3" to="#" style={{ color: "#4d2e22" }}>FashionFlair</Link>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav me-auto">
    //         <li className="nav-item">
    //           <Link className="nav-link active fs-5" aria-current="page" to="/" style={{ color: "#4d2e22" }}>Home</Link>
    //         </li>
    // {
    // (localStorage.getItem("authToken")) ?
    //           <li className="nav-item">
    //             <Link className="nav-link active fs-5" aria-current="page" to="#" style={{ color: "#4d2e22" }}>My Orders</Link>
    //           </li>
    //           : ""
    //         }
    //       </ul>
    //       {!(localStorage.getItem("authToken"))
    //         ?
    //         <div className='d-flex'>
    //           <div className='mx-2'>
    //             <i className="fa fa-user fs-4" aria-hidden="true"></i>
    //             <Link className="mx-2 float-right fs-5" style={{ color: "#4d2e22", textDecoration: "none" }} to="/createuser">SignUp</Link>
    //           </div>
    //           <div>
    //             <i className='fa fa-user-circle fs-5' area-hidden="true"></i>
    //             <Link className="mx-2 float-right fs-5" style={{ color: "#4d2e22", textDecoration: "none" }} to="/login">SignIn</Link>
    //           </div>
    //         </div>
    //         :
    //         <>
    //           <div className="mx-2 fs-5" style={{ color: "#4d2e22" }}>
    //             My Cart
    //             <i className="fa fa-shopping-cart" aria-hidden="true"></i>
    //           </div>
    //           <div className="text-danger mx-1 fs-5" onClick={() => {
    //             localStorage.removeItem("authToken");
    //             navigate("/login")
    //           }}>
    //             Logout
    //           </div>
    //         </>
    //       }
    //           
    //     </div>
    //   </div>
    // </nav>
  )
}
