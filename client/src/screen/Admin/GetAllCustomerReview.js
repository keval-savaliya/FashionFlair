import React from 'react'
import { useState, useEffect } from 'react';

export default function GetAllCustomerReview() {
  const [review, setReview] = useState([]);
  const GetCategory = async () => {
    let response = await fetch("http://localhost:5000/api/GetCategory", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    setReview(response[1])
  }
  useEffect(() => {
    GetCategory()
  }, [])

  const displayTable = review.map((d) => {
    return (
      <>
        <tr className=''>
          <th>{d.name}</th>
          <th>{d.review}</th>
          {/* <th>
            <i class="fa fa-edit mx-3" onClick={() => navigate(`/edit-product/${d._id}`)}></i>
            <i class="fa fa-trash" aria-hidden="true" onClick={() => handleDelete(d._id)}></i>
          </th> */}
        </tr>
      </>
    )
  })

  return (
    <div>
      <table style={{ width: "100%" }}>
        <thead style={{ backgroundColor: "#153656", color: "#fff" }}>
          <tr>
            <th>Name</th>
            <th>Review</th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: "#9dc9f4" }}>
          {displayTable}
        </tbody>
      </table>
    </div>
  )
}
