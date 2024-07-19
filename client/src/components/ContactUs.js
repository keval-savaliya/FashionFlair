import React from 'react'
import '../css/ContactUs.css'
import { AnimatedOnScroll } from "react-animated-css-onscroll";

export default function ContactUs() {
    return (
        <>
            <div className='row mainContentContainer'>
                <div className='col-4 pt-5 title textContactContainer '>
                    Contact Us
                </div>
                <div className='col-8 textContactContainer '>
                    <div className='row'>
                        <AnimatedOnScroll className='m-3 box border-animation' duration={20} animationIn="tada">
                            <div children='tada'>
                                <i class="fa fa-map-marker mt-2" style={{ fontSize: "50px" }}></i>
                                <h3>Our Shop Address</h3>
                                <h6>5011B, 5th Floor,
                                    New Link Road, Beside Goregaon
                                    Sports Complex, Malad West,
                                    Mumbai, Maharashtra 400064</h6>
                            </div>
                        </AnimatedOnScroll>
                        <AnimatedOnScroll className='m-3 box border-animation' duration={20} animationIn="tada">
                            <div children='tada'>
                                <i class="fa fa-envelope mt-2" style={{ fontSize: "50px" }}></i>
                                <h3>General Enquiries</h3>
                                <h6>fashionflare@gmail.com</h6>
                            </div>
                        </AnimatedOnScroll>
                        <AnimatedOnScroll className='m-3 box border-animation' duration={20} animationIn="tada">
                            <div children='tada'>
                                <i class="fa fa-phone mt-2" style={{ fontSize: "50px" }}></i>
                                <h3>Call Us</h3>
                                <h5>+91-8888888888</h5>
                            </div>
                        </AnimatedOnScroll>
                        <AnimatedOnScroll className='m-3 box border-animation' duration={20} animationIn="tada">
                            <div children='tada'>
                                <i class='fa fa-clock-o mt-3' style={{ fontSize: "50px" }}></i>
                                <h3>Our Timings</h3>
                                <h6><p style={{ fontSize: "1.2em" }} className='fontstyle'>Mon - Sat : 10:00 AM - 07:00 PM</p>
                                    <p style={{ fontSize: "1.2em" }} className='fontstyle'>Sun : 10:00 AM - 01:00 PM</p></h6>
                            </div>
                        </AnimatedOnScroll>

                    </div>
                </div>
            </div>
        </>
    )
}
