import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
import cartimg from '../Images/emptycart.webp'

export default function Cart() {

  const navigate = useNavigate();
  const param = useParams();

  const [Data, setData] = useState({
    name: "", email: "", password: "", location: "", cartitems: [], date: ""
  })
  // const [documentId, setDocumentId] = useState(Data._id);
  // const [cartitems, setCartItems] = useState('');
  // const [objectToDelete, setObjectToDelete] = useState('');
  // const [message, setMessage] = useState('');

  const objectId = Data._id;
  const cartitems = Data.cartitems;
  const userEmail = localStorage.getItem("email")

  useEffect(() => {
    const fetchedData = async () => {
      let response = await fetch(`http://localhost:5000/api/getUsers/${userEmail}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        }
      })
      response = await response.json();
      setData(response)
      // console.log(Data.cartitems);
    }
    fetchedData();
  }, {});

  const handleDelete = async (objectToDelete) => {
    try {
      console.log(objectId, cartitems, objectToDelete);

      const response = await fetch(`http://localhost:5000/api/deleteElement/${objectId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cartitems: "cartitems", objectToDelete }),
      });

      const data = await response.json();
      console.log(data);
      window.location.reload();
    } catch (error) {
      console.error('Error:', error);
      // setMessage('Internal server error');
    }
  };

  function getPrice(total, price) {
    return total + price.price;
  }

  function getSalePrice(total, price) {
    return total + price.sale_price;
  }


  if (Data.cartitems.length === 0) {
    return (
      <>
        <div style={{ display: "flex", justifyContent: "center", color: "#4fb4f3", fontWeight: "bold", fontSize: "2em", marginBlock:"30px" }}>Opps! Your Cart is Empty</div>
        <div className='d-flex justify-content-center'><img src={cartimg} /></div>

      </>
    )
  } else {
    return (
      <div className='m-auto' style={{ width: "80%" }}>
        <div className='d-flex w-100 mt-3'>
          <h3 className='me-4 pe-4' style={{ borderRight: "1px solid #ceced5" }}>Cart</h3>
          <h3 className='text-secondary'>{Data.cartitems.length} Items</h3>
        </div>
        <div className=' me-5 pe-5' style={{ float: "left", width: "50%", borderRight: "2px solid #cecede" }}>
          {
            Data.cartitems != []
              ? Data.cartitems.map((f) => {
                return (
                  <div className=' my-3 p-3 d-flex' style={{ border: "1px solid #ceced5", borderRadius: "10px" }}>
                    <div style={{ paddingRight: "20px" }}>
                      <img src={f.image} alt='...' style={{ width: "100px", height: "100px" }} />
                    </div>
                    <div>
                      <div className='fs-5'>{f.name}</div>
                      <div className='mb-1' style={{ fontSize: "1.1em", color: "#353f4f" }}><i class="fa fa-inr me-1" aria-hidden="true"></i>{f.price}</div>
                      <div className='mb-2' style={{ fontSize: "1.1em", color: "#353f4f" }}>All issue easy returns allowed</div>
                      <div className='d-flex'><h6 className='me-3' style={{ fontSize: "1.1em", color: "#353f4f" }}>Size: {f.size}</h6><h6 style={{ fontSize: "1.1em", color: "#353f4f" }}>Qty: 1</h6></div>
                      {/* <div onClick={()=>handleRemove(f._id)}><h5 className='fw-bold'><i class="fa fa-close me-1" aria-hidden="true"></i>REMOVE</h5></div> */}
                      <button className='btn fw-bold' onClick={() => handleDelete(f._id)}><i class="fa fa-close me-2" aria-hidden="true"></i>REMOVE</button>
                    </div>
                  </div>
                )
              })
              : <div>'''''</div>
          }
        </div>
        <div className='mt-3' style={{ float: "left", width: "32%" }}>
          <div className=''>
            <h3 className='fw-bold'>Price Details</h3>
            <div className='d-flex' style={{ color: "#353f4f" }}>
              <div className='w-50'><h5>Total Product Price : </h5></div>
              <div className='w-50' style={{ textAlign: "right" }}><h5><i class="fa fa-plus me-2" aria-hidden="true"></i><i class="fa fa-inr me-1" aria-hidden="true"></i>
                {
                  Data.cartitems.reduce(getSalePrice, 0)
                }</h5></div>
            </div>
            <div className='d-flex text-success' style={{ color: "#353f4f" }}>
              <div className='w-50'><h5>Total Discounts : </h5></div>
              <div className='w-50' style={{ textAlign: "right" }}><h5><i class="fa fa-minus me-2" aria-hidden="true"></i><i class="fa fa-inr me-1" aria-hidden="true"></i>{
                Data.cartitems.reduce(getPrice, 0)
              }</h5></div>
            </div>
            <div className='d-flex' style={{ color: "#353f4f" }}>
              <div className='w-50'><h5>Additional Fees : </h5></div>
              <div className='w-50' style={{ textAlign: "right" }}><h5><i class="fa fa-plus me-2" aria-hidden="true"></i><i class="fa fa-inr me-1" aria-hidden="true"></i>84</h5></div>
            </div>
            <hr />
            <div className='d-flex' style={{ color: "#353f4f" }}>
              <div className='w-50'><h5 style={{ fontWeight: "bold" }}>Order Total : </h5></div>
              <div className='w-50' style={{ textAlign: "right" }}><h5 style={{ fontWeight: "bold" }}><i class="fa fa-inr me-1" aria-hidden="true"></i>{
                Data.cartitems.reduce(getSalePrice, 0) - Data.cartitems.reduce(getPrice, 0)
              }</h5></div>
            </div>
            <div className='pt-2 px-4 pb-1 mt-2' style={{ borderRadius: "10px", backgroundColor: "#d3f4ea" }}>
              <h5 className='text-success' style={{ fontWeight: "bold" }}>Yay! Your total discount is <i class="fa fa-inr ms-1" aria-hidden="true"></i> {
                Data.cartitems.reduce(getPrice, 0)
              } </h5>
            </div>
            <div className='pt-2 px-4 pb-1 mt-4' style={{ borderRadius: "10px", backgroundColor: "#f8f8ff", textAlign: "center" }}>
              <p className='' style={{ fontWeight: "normal", color: "#4b4b58" }}>Clicking on ‘Continue’ will not deduct any money</p>
            </div>
            {/* <div className='py-2 px-4 mt-2' style={{ borderRadius: "10px", backgroundColor: "#1d4265", textAlign: "center" }}>
              <h5 id="bContinue"  style={{ fontWeight: "bold", color: "#fff" }}>Continue</h5>
            </div> */}
            <div className='py-2 px-4 mt-2' style={{ borderRadius: "10px", backgroundColor: "#1d4265", textAlign: "center" }}>
              <h5 style={{ fontWeight: "bold", color: "#fff" }} onClick={() => navigate('/address')}>Continue</h5>
              {/* {isModalOpen && (
                <div className=''>
                  <div className='content'>
                    <div>
                      
                    </div>
                    <div>
                      <button onClick={closeModal}>Close modal</button>
                    </div>
                  </div>

                </div>
              )} */}
            </div>

          </div>
        </div>
      </div>
    )
  }

}