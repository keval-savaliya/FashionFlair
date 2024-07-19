import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import xyzCookie from 'js-cookie'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
import Card from '../components/Card'
import cpage1 from '../Images/CPage11 (2).png'
import cpage2 from '../Images/cpage2.png'
import page3 from '../Images/page3.png'
import page4 from '../Images/page4.png'
import page5 from '../Images/page5.png'
import about1 from '../Images/aboutus1.avif'
import about2 from '../Images/about2.jpg'
import about3 from '../Images/about3.jpg'
import g1 from '../Images/gallery1.jpeg'
import g2 from '../Images/gallery2.jpeg'
import g3 from '../Images/gallery3.jpeg'
import as1 from '../Images/aboutsmall1.png'
import as2 from '../Images/aboutsmall2.png'
import { Link, useNavigate } from 'react-router-dom'
import DetailCategory from './DetailCategory'
import ImageSlider from '../components/ImageSlider'
import ContactUs from '../components/ContactUs'
import ExploreMore from '../components/ExploreMore'
import { AnimatedOnScroll } from "react-animated-css-onscroll";


export default function Home() {

  const [cat, setCat] = useState([]);
  const [test, settest] = useState([]);
  const [search, setsearch] = useState('')
  const [review, setReview] = useState({ name: "", review: "" })
  const navigate = useNavigate();

  //fetch data(collection) from database

  // xyzCookie.set('jwt', , {
  //   expires: 10
  // });
  // alert(xyzCookie.get("authToken"));

  // if(xyzCookie.get('authToken')===null){
  //   navigate('/')
  // }

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/GetCategory", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    setCat(response[0])
    settest(response[1])
  }

  useEffect(() => {
    loadData()
  }, [])

  //save data of testimonial

  const saveReview = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/CreateTestimonial", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: review.name, review: review.review })
    })
    const json = await response.json();
    console.log(json)
    if (!json.success) {
      alert("Enter valid credentials")
    } else {
      alert("Review Added Successfully")
      review.name = ""
      review.review = ""
    }
  }

  const onchange = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value })
  }

  // useEffect(()=>{
  //   fetch('https://localhost:5000/api/DisplayData')
  //   .then(res=>res.json)
  //   .then(res=>setitem(res))
  // },[])

  // var result = item.map((f)=>{
  //   return(
  //     <>
  //       <Card/>
  //     </>
  //   )
  // })
  const images = [
    'https://images-static.nykaa.com/uploads/13f4a3b3-4d8a-4d6a-89a5-fb8d55dc0e7b.jpg?tr=w-300,cm-pad_resize',
    'https://images-static.nykaa.com/uploads/3f847664-8ecc-4f95-a3ff-2fced155a894.jpg?tr=w-300,cm-pad_resize',
    'https://images-static.nykaa.com/uploads/1a1d8812-dfb9-4bfc-9d9b-627d78ec8c3d.jpg?tr=w-300,cm-pad_resize',
    'https://images-static.nykaa.com/uploads/c21fc888-7a3e-4647-a2b2-95ae0a69c3ed.jpg?tr=w-300,cm-pad_resize',
    'https://images-static.nykaa.com/uploads/1468f740-7231-41b1-a3ac-778e2a0d45ff.jpg?tr=w-300,cm-pad_resize',
    'https://images-static.nykaa.com/uploads/d5a14e8e-d114-44f0-9a56-6f53a173336c.jpg?tr=w-300,cm-pad_resize',
    'https://images-static.nykaa.com/uploads/5fbaed81-6306-48c4-8ed7-f35c5107eb1f.jpg?tr=w-300,cm-pad_resize',
    'https://images-static.nykaa.com/uploads/19e67284-2306-4e7d-a852-74a5a152059b.jpg?tr=w-300,cm-pad_resize',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6pZoOBUVrCLCpHPTyY6fSfg1DzmjvzRLPmQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvyVk_YlhUpTHrny9vMfxdjKwbHv7L1TPbPg&usqp=CAU',
  ];


  return (
    <>

      <div className='container-fluid'>
        {/* Navbar */}
        <div className='row'>
          <div className='col'>
            <Navbar />
          </div>
        </div>

        {/* carousel */}
        <div id="carouselExample" class="carousel slide" style={{ marginTop: "100px" }}>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={cpage1} class="d-block w-100" alt="..." style={{ height: "60vh" }} />
            </div>
            <div class="carousel-item">
              <img src={cpage2} class="d-block w-100" alt="..." style={{ height: "60vh" }} />
            </div>
            <div class="carousel-item">
              <img src={page3} class="d-block w-100" alt="..." style={{ height: "60vh" }} />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>


        {/* Category Scrollmenu */}
        <AnimatedOnScroll animationIn="bounceInLeft">
          <div className='scrollmenu mt-4' children="bounceInLeft">
            {
              cat != []
                ? cat.map(catdata => {
                  return (
                    <div className='col' >
                      <div onClick={() => navigate('/' + catdata._id)} key={catdata._id} className='m-3'>
                        <div className='d-flex justify-content-center align-items-center rounded-circle col'>
                          <img src={catdata.image} className='rounded-circle' alt='...' style={{ height: "150px", width: "150px" }} />
                        </div>
                        <div className='d-flex justify-content-center align-items-center fs-4 fw-bold'>
                          <p style={{ textDecoration: "none", color: "#193046" }}>{catdata.categoryname}</p>
                        </div>
                      </div>
                    </div>
                  )
                }) : <div>'''''''</div>
            }
          </div>
        </AnimatedOnScroll>


        {/* trend */}
        <AnimatedOnScroll duration='5000' animationIn="fadeInDownBig">
          <div id='gallery' className=' w-100 trend-container my-5' children="fadeInDownBig">
            <ImageSlider images={images} />
          </div>
        </AnimatedOnScroll>


        {/* YouTube video */}
        <AnimatedOnScroll duration={20} animationIn="fadeIn">
          {/* <div className='my-5'> */}
          <ExploreMore children="fadeIn" />
          {/* </div> */}
        </AnimatedOnScroll>



        {/* testimonial */}
        <div className='row' style={{ marginTop: "100px" }} id='testimonial'>
          <AnimatedOnScroll animationIn="bounceInLeft" className='col-5'>
            <div children='bounceInLeft' style={{ color: "#202f5a", marginRight: "100px", borderLeft: "10px solid #202f5a" }} className=' m-3 ps-5'>
              <h6 className='fw-bold' style={{ letterSpacing: "1px", wordSpacing: "2px" }}>OUR HAPPY CUSTOMERS</h6>
              <h1 style={{ letterSpacing: "2px", wordSpacing: "5px" }}>What our <span style={{ fontWeight: "600" }}>clients</span></h1>
              <h1 style={{ fontWeight: "600", letterSpacing: "2px", wordSpacing: "5px" }}><span>says</span> about our work</h1>
            </div>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="bounceInRight" className='col-6'>
            <div children='bounceInRight' style={{ color: "#202f5a" }} className=' m-3'>
              <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" >
                <div class="carousel-inner px-5 py-2" style={{ height: "300px" }}>
                  <div class="carousel-item ctitem active" >
                    <div className='row'>
                      <div className='col d-flex' >
                        <h2 style={{ fontWeight: "bold", textAlign: "center" }} >Grisha Desai</h2>
                        <i class="fa fa-quote-right ms-auto fs-1"></i>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col'>
                        <h6 style={{ lineHeight: "30pt", color: "#6b6b6b", textAlign: "center", }} className='fontstyle'>We, Queen Garments, understand the ever-changing mind of a woman<br />
                          and thus aim at providing a satisfactory and fully clothed closet that suits
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div>
                    {
                      test != []
                        ? test.map((t) => {
                          return (
                            <>
                              <div class="carousel-item ctitem" >
                                {/* <h2 style={{ fontWeight: "bold" }}>{t.name}</h2>
                              <h6 style={{ lineHeight: "30pt", color: "#6b6b6b", textAlign: "center" }} className='fontstyle'>{t.review}</h6> */}
                                <div className='row'>
                                  <div className='col d-flex' >
                                    <h2 style={{ fontWeight: "bold", textAlign: "center" }} >{t.name}</h2>
                                    <i class="fa fa-quote-right ms-auto fs-1"></i>
                                  </div>
                                </div>
                                <div className='row'>
                                  <div className='col'>
                                    <h6 style={{ lineHeight: "30pt", color: "#6b6b6b", textAlign: "center", }} className='fontstyle'>
                                      {t.review}
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })
                        : <div>'.....'</div>
                    }
                  </div>

                  <div className='carousel-item p-2 ctitem' style={{ textAlign: "center" }}>
                    <div><h4 style={{ fontWeight: "bold" }}>Add Your Opinion</h4></div>
                    <input type='text' placeholder='Name' className='form-control mb-3' name='name' value={review.name} onChange={onchange}></input>
                    <div class="input-group mb-3">
                      <textarea class="form-control" aria-label="With textarea" placeholder='Share Your Review' name='review' value={review.review} onChange={onchange} style={{ height: "50px" }}></textarea>
                    </div>
                    <button className='btn btn-secondary' onClick={saveReview}>Submit</button>

                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon rounded-3" aria-hidden="true" style={{ backgroundColor: "#193046" }}></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                  <span class="carousel-control-next-icon rounded-3" aria-hidden="true" style={{ backgroundColor: "#193046" }}></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </AnimatedOnScroll>

        </div>


        {/* Contact Us */}
        <div id='contactus' className='my-3 w-100' style={{ float: "right" }}>
          <ContactUs />
        </div>

        {/* Footer */}
        <div style={{ width: "100%", float: "right" }}>
          <Footer />
        </div>

      </div>
    </>
  )
}
