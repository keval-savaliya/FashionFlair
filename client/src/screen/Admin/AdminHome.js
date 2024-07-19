import React from 'react'
import bag from '../../Images/bagwithhand.png'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminHome() {
    const navigate = useNavigate();
    return (
        <div style={{ textAlign: "center", fontWeight: "bold" }}>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBlock: "10px" }} >
                <div className='me-3 p-3 fs-3' style={{ width: "49%", height: "250px", float: "left", backgroundColor: "#89aed3", borderRadius: "30px" }} onClick={() => navigate('/admin-home/allcategory')}>
                    <div className='mb-4'>See All Category</div>
                    <div className='rounded-4 py-3 m-auto' style={{ backgroundColor: "#052a4e", width: "20%" }}>
                        <i class="fa fa-eye" aria-hidden="true" style={{ fontSize: "70px", color: "#89aed3" }}></i>
                    </div>
                </div>
                <div className='p-3 fs-3' style={{ width: "48%", height: "250px", float: "left", backgroundColor: "#215382", borderRadius: "30px" }} onClick={() => navigate('/admin-home/allproduct')}>
                    <div className='mb-4 text-light'>See All product</div>
                    <div className='rounded-4 py-3 m-auto' style={{ backgroundColor: "#89aed3", width: "20%" }}>
                        <i class="fa fa-eye" aria-hidden="true" style={{ fontSize: "70px", color: "#052a4e" }}></i>
                    </div>
                </div>
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }} >
                <div style={{ width: "33%", marginRight: "10px" }}>
                    <div className='p-3 fs-3 text-light' style={{ width: "100%", height: "200px", marginBottom: "10px", borderRadius: "30px", backgroundColor: "#052a4e" }} onClick={() => navigate('/admin-home/getreview')}>
                        <div className='mb-4'>See All Customer review</div>
                        <div className='rounded-4 py-3 m-auto' style={{ backgroundColor: "#89aed3", width: "20%" }}>
                            <i class="fa fa-eye" aria-hidden="true" style={{ fontSize: "70px", color: "#052a4e" }}></i>
                        </div>
                    </div>
                    <div className='p-3 fs-3 text-light' style={{ width: "100%", height: "200px", borderRadius: "30px", backgroundColor: "#1d4265" }} onClick={() => navigate('/admin-home/getUsers')}>
                        <div className='mb-4'>See All Customer Orders</div>
                        <div className='rounded-4 py-3 m-auto' style={{ backgroundColor: "#89aed3", width: "20%" }}>
                            <i class="fa fa-eye" aria-hidden="true" style={{ fontSize: "70px", color: "#052a4e" }}></i>
                        </div>
                    </div>
                </div>
                <div style={{ width: "32%", marginRight: "10px" }}>
                    <div className='p-3 fs-3' style={{ width: "100%", height: "300px", marginBottom: "10px", borderRadius: "30px", backgroundColor: "#5c94c9" }} onClick={() => navigate('/create-category')}>
                        <div className='mb-5'>Add Category</div>
                        <div className='rounded-4 p-3 m-auto' style={{ backgroundColor: "#052a4e", width: "20%" }}>
                            <i class="fa fa-plus" aria-hidden="true" style={{ fontSize: "70px", color: "#5c94c9" }}></i>
                        </div>
                    </div>
                    <div className='p-3 fs-3' style={{ width: "100%", height: "100px", borderRadius: "30px", backgroundColor: "#89aed3" }}>
                        Add Key trends
                    </div>
                </div>
                <div style={{ width: "32%" }}>
                    <div style={{ height: "410px", borderRadius: "30px", backgroundColor: "#052a4e" }} onClick={() => navigate('/create-product')}>
                        <div className='text-light fw-bold fs-2 pt-3'>Add product</div>
                        <div className='d-flex justify-content-end align-item-end'>
                            <img src={bag} alt='' style={{ width: "350px", height: "350px" }} />
                        </div>
                    </div>
                </div>

                {/* <div className='bg-info' style={{ width: "30%", height: "270px", float: "left" }}>

                </div>
                <div className='bg-secondary' style={{ width: "30%", height: "400px", float: "left" }}>

                </div> */}
            </div>
        </div>
    )
}
