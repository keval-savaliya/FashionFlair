import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import '../css/Address.css'

export default function Address() {
    const { currentUser } = useSelector((state) => state.user);
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const loadData = async () => {
        let response = await fetch(`http://localhost:5000/api/getUsers/${currentUser.email}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await response.json();
        setUser(response)
    }

    useEffect(() => {
        loadData()
    }, [])

    const onchange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response1 = await fetch(`http://localhost:5000/api/addOrder`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: user.name,
                    email: user.email,
                    contactno: user.contactno,
                    address: user.address,
                    pincode: user.pincode,
                    city: user.city,
                    state: user.state,
                    cartitems: user.cartitems
                }),
            }
            );
            const response = await fetch(`http://localhost:5000/api/savecontactdetails/${user._id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: user.name,
                    contactno: user.contactno,
                    address: user.address,
                    pincode: user.pincode,
                    city: user.city,
                    state: user.state,
                    isOrdered: true,
                    cartitems:[]
                }),
            }
            );
            
            const json1 = await response1.json();
            const json = await response.json();
            console.log(json1);
            console.log(json);
            if (response.status === 200) {
                openModal()
            } else {
                alert("Enter Credentials Properly")
            }
        } catch (error) {
            console.log(error);
        }
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        navigate('/home')
    };

    return (
        <div>
            {/* <button onClick={() => console.log(user)}>print</button> */}
            <div class="modal">
                <div class="modal__container">
                    <div class="modal__featured">
                        <div class="modal__circle"></div>
                        <img src="https://cloud.githubusercontent.com/assets/3484527/19622568/9c972d44-987a-11e6-9dcc-93d496ef408f.png" class="modal__product" />
                    </div>
                    <div class="modal__content">
                        <h2 className='fw-bold'>Contact Details</h2>
                        <form>
                            <ul class="form-list">
                                <li class="form-list__row">
                                    <label>Name</label>
                                    <input className='addressinput' name='name' value={user.name} onChange={onchange} type="text" />
                                </li>
                                <li class="form-list__row">
                                    <label>Contact Number</label>
                                    <input className='addressinput' name='contactno' value={user.contactno} onChange={onchange} type="text" />
                                </li>
                                <li class="form-list__row">
                                    <label>Address</label>
                                    <input className='addressinput' name='address' value={user.address} onChange={onchange} type="text" />
                                </li>
                                <div className='row'>
                                    <li class="form-list__row col">
                                        <label>Pincode</label>
                                        <input className='addressinput' name='pincode' value={user.pincode} onChange={onchange} type="text" />
                                    </li>
                                    <li class="form-list__row col">
                                        <label>City</label>
                                        <input className='addressinput' name='city' value={user.city} type="text" onChange={onchange} />
                                    </li>
                                    <li class="form-list__row col">
                                        <label>State</label>
                                        <input className='addressinput' name='state' value={user.state} type="text" onChange={onchange} />
                                    </li>
                                </div>
                                <li>
                                    <button type="submit" onClick={handleSubmit} class="button btn">Order</button>
                                    {isModalOpen && (
                                        <div className=''>
                                            <div className='content' style={{ backgroundColor: "#153656" }}>
                                                <div className='fs-2'>
                                                    Yay!! Your Order is Placed
                                                </div>
                                                <div>
                                                    <button className='btn bg-light' onClick={closeModal}>Close</button>
                                                </div>
                                                <div className=''>
                                                    Soon your Order get delivered.
                                                </div>
                                            </div>

                                        </div>
                                    )}
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
