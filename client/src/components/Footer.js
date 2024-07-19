import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../css/Footer.css'

export default function Footer() {
  return (
    // <div className='border-top border-dark p-5 w-100' style={{ backgroundColor: "#9dc9f4" }}>
    //   <div className='d-flex justify-content-center'>
    //     <a className='btn text-white rounded-circle m-2' style={{ backgroundColor: "#3b5998" }} href='#!'>
    //       <i className='fa fa-facebook'></i>
    //     </a>
    //     <a className='btn text-white rounded-circle m-2' style={{ backgroundColor: "#55acee" }} href='#!'>
    //       <i className='fa fa-twitter'></i>
    //     </a>
    //     <a className='btn text-white rounded-circle m-2' style={{ backgroundColor: "#dd4b39" }} href='#!'>
    //       <i className='fa fa-google'></i>
    //     </a>
    //     <a className='btn text-white rounded-circle m-2' style={{ backgroundColor: "#ac2bac" }} href='#!'>
    //       <i className='fa fa-instagram'></i>
    //     </a>
    //     <a className='btn text-white rounded-circle m-2' style={{ backgroundColor: "#0082ca" }} href='#!'>
    //       <i className='fa fa-linkedin'></i>
    //     </a>
    //     <a className='btn text-white rounded-circle m-2' style={{ backgroundColor: "#333333" }} href='#!'>
    //       <i className='fa fa-github'></i>
    //     </a>
    //   </div>
    //   <div class="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
    //     © 2020 Copyright:
    //     <a class="text-body" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    //   </div>
    // </div>
    <>
      <div className='mainContainer'>
        <div class="mainFooterContainer">
          <div className='textContainer'>
            <div class="footer-text">
              <h1 className='pt-3' style={{ fontFamily: "Playball" }}>Fashion Flair</h1>
              <div className='d-flex justify-content-center mt-3'>
                <p className='me-5'>About</p>
                <p className='me-5'>Contact</p>
                <p className='me-5'>Terms & Conditions</p>
                <p>Privacy Policy</p>
              </div>
              <div className='d-flex justify-content-center mt-2'>
                <div className='me-3'>
                  <a className='btn icon text-white rounded-circle m-2' style={{ backgroundColor: "#3b5998" }} href='#!'>
                    <i className='fa fa-facebook'></i>
                  </a>
                </div>
                <div className='me-3'>
                  <a className='btn icon text-white rounded-circle m-2' style={{ backgroundColor: "#55acee" }} href='#!'>
                    <i className='fa fa-twitter'></i>
                  </a>
                </div>
                <div className='me-3'>
                  <a className='btn icon text-white rounded-circle m-2' style={{ backgroundColor: "#dd4b39" }} href='#!'>
                    <i className='fa fa-google'></i>
                  </a>
                </div>
                <div className='me-3'>
                  <a className='btn icon text-white rounded-circle m-2' style={{ backgroundColor: "#ac2bac" }} href='#!'>
                    <i className='fa fa-instagram'></i>
                  </a>
                </div>
                <div className='me-3'>
                  <a className='btn icon text-white rounded-circle m-2' style={{ backgroundColor: "#0082ca" }} href='#!'>
                    <i className='fa fa-linkedin'></i>
                  </a>
                </div>
                <div className='me-3'>
                  <a className='btn icon text-white rounded-circle m-2' style={{ backgroundColor: "#333333" }} href='#!'>
                    <i className='fa fa-github'></i>
                  </a>
                </div>
              </div>
              <div class="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                © 2020 Copyright:
                <a class="" href="https://mdbootstrap.com/">MDBootstrap.com</a>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
