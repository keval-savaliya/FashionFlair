import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Getorders() {
    const [order, setorder] = useState([]);
    const navigate = useNavigate();
    const GetCategory = async () => {
        let response = await fetch("http://localhost:5000/api/getOrders", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(res => setorder(res));
        // response = await response.json();
        // setorder(response)
    }
    useEffect(() => {
        GetCategory()
    }, [])

    const handledelete = async (id) => {
        try {
            console.log(id);
            const response = await fetch(`http://localhost:5000/api/deleteOrder/${id}`, {
                method: 'DELETE'
            }).then(res => res.json()).then(res => setorder(res));
            // const data = await response.json();
            if (response.status === 200) {
                alert('Document deleted Successfully')
                window.location.reload();
            }
            // console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>

            <div className='row' style={{ backgroundColor: "#052a4e" }}>
                {
                    order.map(m => {
                        return (
                            <>
                                <div className='col-3 my-3 p-3' style={{ border: "2px solid #052a4e", backgroundColor: "#5c94c9" }}>
                                    <h4 className='fw-bold fs-4'>Name : {m.name}</h4>
                                    <div className='p-3' style={{ border: "1px solid" }}>
                                        <h6>Address : {m.address}</h6>
                                        <div className='' style={{ display: "flex", justifyContent: "flex-start" }}>
                                            <h6 className='me-5'>City : {m.city}</h6>
                                            <h6>State : {m.state}</h6>
                                        </div>
                                        <h6>Pincode : {m.pincode}</h6>
                                    </div>

                                    <h5 className='fw-bold fs-4'>Orders : </h5>
                                    {
                                        m.cartitems.map(data => {
                                            return (
                                                <>
                                                    <h5>{data.name}</h5>
                                                </>
                                            )
                                        })
                                    }
                                    <button className='button px-3 py-1 rounded-3 text-light mb-0' onClick={() => handledelete(m._id)}>Delivered</button>
                                </div>

                            </>
                        )
                    })
                }
            </div>

        </div>
    )
}
