import React from 'react'
import Navbar from '../components/Navbar'
import './About.css'
import Footer from '../components/Footer'
import Slideshow from '../components/Slideshow'
import cpage1 from '../Images/CPage11 (2).png'
import cpage2 from '../Images/cpage2.png'
import page3 from '../Images/page3.png'
import video from '../Images/video1.mp4'
import ImageSlider from '../components/ImageSlider'
import MultiCarousel from '../components/ImageSlider'


export default function About() {
    
    return (
        <>
            <div style={{ marginBottom: "100px" }}>
                <Navbar />
            </div>

            <div>
                <div id="hero" class="w-100">
                    {/* <h1 style={{ paddingLeft: "550px", paddingTop: "250px", margin: "0", fontSize: "48px", fontWeight: "700", lineHeight: "56px", color: "#ffffff", fontFamily: "Poppins" }}>Meet Our Team</h1> */}
                    <div class=" position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
                        <div class="row">
                            <div >
                                <h1 style={{ paddingLeft: "300px", paddingTop: "270px", wordSpacing: "12px" }}>Dreams and teams work together.</h1>
                            </div>
                        </div>
                    </div>
                    {/* <div class=" position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
                        <div class="row">
                            <div className='fixed-content'>
                                <div className='carouselcustom carousel carousel-fade' style={{ marginTop: "100px", width: "100%" }} data-ride="carousel">
                                    <div id="carouselExampleCaptions" className="carousel slide" style={{ objectFit: "contain !important" }}>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src={cpage1} className="d-block w-100" alt="..." style={{ height: "85vh" }} />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={cpage2} className="d-block w-100" alt="..." style={{ height: "85vh" }} />
                                            </div>
                                            <div className="carousel-item">
                                                <img src={page3} className="d-block w-100" alt="..." style={{ height: "85vh" }} />
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>

                <div className='w-100' style={{ position: "absolute", top: "104vh", width: "100%" }}>
                    <div className='row w-100' style={{ backgroundColor: "#9dc9f4" }}>
                        <div className='col-12' style={{ fontSize: "2.2em", fontWeight: "bold", textAlign: "center", paddingTop: "30px" }}>
                            Our Services
                        </div>
                        <div className='row px-5 mt-5 pb-5' style={{ marginLeft: "100px" }}>
                            <div className='col'>
                                <div className='row'>
                                    <div className='col' style={{ width: "18rem" }}>
                                        <img class="card-img-top card1img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYq_gqVDUSXDw63L6SlRzAdh84txOyhKIvmZe4rNUFdsqDiCF0sZsDLEbNFb2_3AHDi2U&usqp=CAU" alt="Card image cap" />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <div className='p-3' style={{ width: "250px", backgroundColor: "#5c94c9" }}>
                                            <div >
                                                <h5 class="card-title mb-2">Card title</h5>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='row'>
                                    <div className='col' style={{ width: "18rem" }}>
                                        <img class="card-img-top card1img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYq_gqVDUSXDw63L6SlRzAdh84txOyhKIvmZe4rNUFdsqDiCF0sZsDLEbNFb2_3AHDi2U&usqp=CAU" alt="Card image cap" />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <div className='p-3' style={{ width: "250px", backgroundColor: "#5c94c9" }}>
                                            <div >
                                                <h5 class="card-title mb-2">Card title</h5>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='row'>
                                    <div className='col' style={{ width: "18rem" }}>
                                        <img class="card-img-top card1img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYq_gqVDUSXDw63L6SlRzAdh84txOyhKIvmZe4rNUFdsqDiCF0sZsDLEbNFb2_3AHDi2U&usqp=CAU" alt="Card image cap" />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <div className='p-3' style={{ width: "250px", backgroundColor: "#5c94c9" }}>
                                            <div >
                                                <h5 class="card-title mb-2">Card title</h5>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row' style={{ height: "300px", backgroundColor: "#fff" }}>
                        <div className='col py-5' style={{ textAlign: "center", paddingLeft: "200px", paddingRight: "200px" }}>
                            <p style={{ color: "#1d4265", fontWeight: "bold" }}>fashionflair@gmail.com</p>
                            <h3 className='mb-3' style={{ fontWeight: "bold" }}>Fashion Ideas That Last Longer</h3>
                            <h6 className='mb-3'>Visual Branding Design & Logo
                                Branding Inspiration - The June
                                Design Web Design Agency
                                Website homepage design, webpage design, creative
                                website design inspiration, product web design, design
                                portfolio website, web blog design, web design tutorial,
                                portfolio design website, website portfolio design, web
                                design services ... less</h6>
                            <button className='btn' style={{ backgroundColor: "#5c94c9", width: "100px" }}>See All</button>
                        </div>
                        <div className='col' >
                            <img class="card-img-top card2img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYq_gqVDUSXDw63L6SlRzAdh84txOyhKIvmZe4rNUFdsqDiCF0sZsDLEbNFb2_3AHDi2U&usqp=CAU" alt="Card image cap" />
                        </div>
                    </div>

                    <div className='row w-100 pt-4' style={{ backgroundColor: "#5c94c9" }}>
                        <p style={{ color: "#1d4265", fontWeight: "bold", textAlign: "center" }}>fashionflair@gmail.com</p>
                        <div className='col-12' style={{ fontSize: "2.2em", fontWeight: "bold", textAlign: "center" }}>
                            See What's Popular
                        </div>
                        <div className='row px-5 mt-5 pb-5 ms-5'>
                            <div className='col'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYq_gqVDUSXDw63L6SlRzAdh84txOyhKIvmZe4rNUFdsqDiCF0sZsDLEbNFb2_3AHDi2U&usqp=CAU" alt="Card image cap" />
                            </div>
                            <div className='col'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYq_gqVDUSXDw63L6SlRzAdh84txOyhKIvmZe4rNUFdsqDiCF0sZsDLEbNFb2_3AHDi2U&usqp=CAU" alt="Card image cap" />
                            </div>
                            <div className='col'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYq_gqVDUSXDw63L6SlRzAdh84txOyhKIvmZe4rNUFdsqDiCF0sZsDLEbNFb2_3AHDi2U&usqp=CAU" alt="Card image cap" />
                            </div>
                            <div className='col'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYq_gqVDUSXDw63L6SlRzAdh84txOyhKIvmZe4rNUFdsqDiCF0sZsDLEbNFb2_3AHDi2U&usqp=CAU" alt="Card image cap" />
                            </div>
                        </div>
                    </div>
                    <div className='row w-100 pt-5' style={{ backgroundColor: "#9dc9f4" }}>
                        <div className='col d-flex justify-content-center'>
                            <div className='w-25 px-5 py-5' style={{ borderRadius: "160px 160px 0px 0px", backgroundColor: "#5c94c9", textAlign: "center" }}>
                                <h3 className='mb-4' style={{ fontSize: "1.5em", fontWeight: "bold" }}>Talk To Our Staff</h3>
                                <p className='mb-5' >Website homepage design, webpage design, creative
                                    website design inspiration, product web design, design
                                    portfolio website, web blog design, web design tutorial,
                                    portfolio design website, website portfolio design, web
                                    design services ... less</p>
                                <button className='btn' style={{ backgroundColor: "#a4beff", width: "100px" }}>Let's Talk</button>
                            </div>
                        </div>
                    </div>
                    
                    <Footer />
                </div>
            </div>
        </>
    )
}
