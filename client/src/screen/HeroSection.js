import React from 'react';
import { Link } from 'react-router-dom';
import back from '../Images/heroBack.png'
import hero from '../Images/herof3.png'
import butterfly from '../Images/butterfly1 (3).png'
import '../css/herosection.css'

export default function HeroSection() {
    const customStyle1 = {
        '--n': 37,
    };
    const customStyle2 = {
        '--n': 24,
    };
    const customStyle3 = {
        '--n': 18,
    };
    return (
        <div style={{ width: "100%" }}>
            <div className='background'>
                <img src={hero} alt='...' className='shoppinggirl' />
                <div className='d-flex justify-content-center heronavbar'>
                    <Link className='fs-5 mt-4' to='/home' style={{ textDecoration: "none", color: "#193046", marginRight: "50px" }}>Home</Link>
                    <Link className='fs-5 mx-5 mt-4' to='/about' style={{ textDecoration: "none", color: "#193046" }}>About Us</Link>
                    <h5 className='ms-5 mt-4' style={{ fontFamily: "Playball", color: "#1D4265", fontWeight: "bold", fontSize: "45px" }}>Fashion Flair</h5>
                    <img className='me-5' src={butterfly} alt='...' style={{ width: "100px", height: "100px" }} />
                    <Link className='fs-5 mx-5 mt-4' to='/' style={{ textDecoration: "none", color: "#193046" }}>Contact Us</Link>
                    <Link className='btn fs-5 mx-5 mt-3 signupbutton' to='/createuser' style={{ textDecoration: "none", color: "#ffffff", width: "100px", height: "45px" }}>Sign Up</Link>
                </div>
                <div style={{ marginTop: "120px", marginLeft: "50px" }}>
                    <h2 className='fs-1' style={{ fontFamily: "Gowun Dodum", fontWeight: "bolder", color: "#2E5F8E" }}>C r e a t e<span className='me-5'></span>Y o u r<span className='me-5'></span>O w n</h2>
                    <h1 className='mt-3' style={{ fontFamily: "Galada", fontWeight: "bold", color: "#1D4265", fontSize: "5rem" }} >Style Statement</h1>
                    {/* <div class="typed-text d-none"> Full stack Developer , Enthusiastic Student , Web Designer</div> */}
                    {/* <div className='mt-4 fs-1' style={{ color: "#1D4265" }}> */}
                    <p className='type' >Style that amplifies your personality</p>
                    <p className='type'>Style that describes you</p>
                    <p className='type'>Style that speakes</p>
                    {/* </div> */}
                </div>
                <div className='mt-5' style={{ marginLeft: "50px" }}>
                    <Link to='/home' className='btn text-white fs-5 button'><span>Get Started</span></Link>
                </div>
                {/* <nav className='d-flex justify-content-center  align-items-center fs-5 px-5' style={{ backgroundColor: "#193046" }}>
                <Link to='/home' className='link mx-5'>Home</Link>
                <Link to='/home' className='link mx-5'>About Us</Link>
                <img src={logo1} alt='...' style={{height:"80px", width:"250px"}} className='mx-5'/>
                <Link to='/home' className='link mx-5'>Gallery</Link>
                <Link to='/home' className='link mx-5'>Contact Us</Link>
            </nav> */}
                {/* <div style={{ width: '100%', height: '100%', position: 'relative', background: 'white' }}>
                <div style={{ width: 891.12, height: 1197.50, left: 456, top: -479, position: 'absolute', background: 'linear-gradient(180deg, rgba(108.87, 159.56, 208.04, 0.92) 35%, rgba(175.88, 209.69, 242.04, 0.92) 100%, rgba(39.10, 108.94, 175.74, 0) 100%)' }}></div>
                <img style={{ width: 691, height: 526, left: 419, top: 169, position: 'absolute' }} src="https://via.placeholder.com/691x526" />
                <div style={{ width: 620, height: 58, left: 14, top: 226, position: 'absolute', color: 'rgba(46.39, 95.44, 142.36, 1)', fontSize: 32, fontFamily: 'Gowun Dodum', fontWeight: '400', wordWrap: 'break-word' }}>C R E A T E   Y O U R   O W N</div>
                <div style={{ width: 398, height: 93, left: 312, top: 35, position: 'absolute', color: '#0C457C', fontSize: 64, fontFamily: 'Kapakana', fontWeight: '400', wordWrap: 'break-word' }}>Fashion Flair</div>
                <div style={{ width: 712, height: 81, left: 14, top: 275, position: 'absolute', color: 'rgba(29.46, 65.88, 100.71, 1)', fontSize: 64, fontFamily: 'Galada', fontWeight: '400', wordWrap: 'break-word' }}>Style  Statement</div>
                <div style={{ width: 526, height: 110, left: 14, top: 356, position: 'absolute' }}><span style={{ color: 'rgba(25, 48, 70, 0.99)', fontSize: 24, fontFamily: 'Inria Serif', fontWeight: '700', wordWrap: 'break-word' }}>Style that amplifies your personalit</span><span style={{ color: 'rgba(25, 48, 70, 0.99)', fontSize: 24, fontFamily: 'Inria Serif', fontWeight: '700', lineHeight: 100, wordWrap: 'break-word' }}>y<br /></span><span style={{ color: 'rgba(25, 48, 70, 0.99)', fontSize: 24, fontFamily: 'Inria Serif', fontWeight: '700', wordWrap: 'break-word' }}>Style that describes you<br /></span><span style={{ color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}><br /></span></div>
                <div style={{ width: 243, height: 53, left: 14, top: 513, position: 'absolute', background: 'linear-gradient(90deg, rgba(29.02, 77.07, 123.04, 1) 53%, rgba(20.67, 56.05, 89.89, 1) 80%, rgba(39.10, 108.94, 175.74, 0.92) 80%, rgba(14.83, 37.99, 60.14, 0) 100%)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: 15 }} />
                <div style={{ width: 324, height: 55, left: 40, top: 520, position: 'absolute', color: 'white', fontSize: 32, fontFamily: 'Istok Web', fontWeight: '400', wordWrap: 'break-word' }}>Get Started</div>
                <div style={{ width: 918, height: 44, left: 40, top: 35, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Home</div>
                <div style={{ width: 918, height: 57, left: 146, top: 38, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>About Us</div>
                <div style={{ width: 918, height: 57, left: 726, top: 38, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Contact Us      </div>
            </div> */}
            </div>
        </div>
    )
}
