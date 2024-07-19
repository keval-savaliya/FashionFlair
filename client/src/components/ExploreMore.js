import React from 'react'
import '../css/ExploreMore.css'

export default function ExploreMore() {
    return (
        <div>
            <div className='container'>
                <div className='row mb-3'>
                    <div className='col' style={{ textAlign: "center", color: "#052a4e" }}>
                        <p style={{ fontFamily: "Galada", fontWeight: "bold", fontSize: "3em" }}>Explore More <h5 className='fontstyle'>Explore Coolest Fashion Trends here</h5></p>
                    </div>
                </div>
                <div className='row' style={{ height: "100vh" }}>
                    <div className='col mx-2'>
                        <div className='row' style={{ height: "100%" }}>
                            <div className='col-12 my-2' style={{ height: "49%", borderRadius: "10px", backgroundColor: "#c5a0a6" }}>
                                <iframe src="https://www.youtube.com/embed/dkqzlArXD5A?si=y-rtbrf3SeTQRYX2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{ width: "100%", height: "100%", borderRadius: "10px" }}></iframe>
                            </div>
                            <div className='col-12 my-2 box12' style={{ height: "49%", borderRadius: "10px", backgroundColor: "#b3b4ba" }}>
                                <h5 style={{ color: "#fff", fontWeight: "bold", paddingTop: "200px" }}>Browse 1,500+ womens clothes hanger stock photos and images available, or start a new search to explore more stock photos and images</h5>
                                <button className='px-3 py-1' style={{ borderRadius: "25px", backgroundColor: "#1d4265", border: "none", color: "#fff", fontWeight: "bold", fontSize: "1.2em" }}>Explore</button>
                            </div>
                        </div>

                    </div>
                    <div className='col mx-2'>
                        <div className='row' style={{ height: "100%" }}>
                            <div className='col-12 bg-secondary my-2 box21' style={{ height: "39%", borderRadius: "10px" }}>
                                <h5 style={{ color: "#fff", fontWeight: "bolder", paddingTop: "130px" }}>Elevate your everyday style with women's kurtis, where comfort meets elegance in a symphony of colours, patterns, and timeless designs.</h5>
                                <button className='px-3 py-1' style={{ borderRadius: "25px", backgroundColor: "#1d4265", border: "none", color: "#fff", fontWeight: "bold", fontSize: "1.2em" }}>Explore</button>
                            </div>
                            <div className='col bg-secondary my-2' style={{ height: "59%", borderRadius: "10px" }}>
                                <iframe src="https://www.youtube.com/embed/Jh65uUdLCZM?si=1iDXUu6pekeEWV-a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{ width: "100%", height: "100%", borderRadius: "10px" }}></iframe>
                            </div>
                        </div>

                    </div>
                    <div className='col mx-2'>
                        <div className='row' style={{ height: "100%" }}>
                            <div className='col-12 my-2 box31' style={{ height: "49%", borderRadius: "10px", backgroundColor: "#9dc9f4" }}>
                                <h5 style={{ fontWeight: "bolder", paddingTop: "200px" }}>Handbags are crucial and a must-have fashion accessory in every woman's wardrobe.  Choose the one that you can easily find suitable and go well with your outfit.</h5>
                                <button className='px-3 py-1' style={{ borderRadius: "25px", backgroundColor: "#000000", border: "none", color: "#fff", fontWeight: "bold", fontSize: "1.2em" }}>Explore</button>
                                {/* <img src={img3} style={{ width: "100%", height: "100%" }} /> */}
                            </div>
                            <div className='col my-2' style={{ height: "49%", borderRadius: "10px", backgroundColor: "#1d4265" }}>
                                <iframe src="https://www.youtube.com/embed/Ib1EVUPnRNw?si=sbrRJYBf3YoEBSKP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{ width: "100%", height: "100%", borderRadius: "10px" }}></iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
