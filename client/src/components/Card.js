import React from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom'
// import { useDispatchCart, useCart } from './ContextReducer'

export default function Card(props) {


  let item = props.items;

  const handleToCart = () => {

  }


  let arr = (item.sizes).map((e) => {
    return (
      <option value="{e}">{e}</option>
    )
  });

  // console.log(arr)
  // console.log(item.sizes)

  return (
    <div className='m-4 allcard' style={{ width: "20rem", height: "80vh", float: "left" }}>
      <img src={item.image} className="card-img-top" alt='....' style={{ height: "60vh", objectFit: "fill" }} />
      <div className='m-2'>
        <h5>{item.company_name}</h5>
        {/* change  h1 to link*/}
        <Link to={"/" + item._id} style={{ color: "#43505c" }}>{item.name}</Link>
        <br />
        <div className='me-2' style={{ float: "left" }}><h6><i class="fa fa-inr" aria-hidden="true"></i>{item.price}</h6></div>
        <div style={{ float: "left", color: "#43505c", textDecoration: "line-through" }}><h6><i class="fa fa-inr" aria-hidden="true"></i>{item.sale_price}</h6></div>
      </div>
    </div>
  )
}
