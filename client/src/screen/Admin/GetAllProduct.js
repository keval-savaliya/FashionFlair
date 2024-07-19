import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

export default function GetAllProduct() {

    const navigate = useNavigate();
    const params = useParams();

    const [cat, setCat] = useState([]);
    const [product, setProduct] = useState([]);

    const GetCategory = async () => {
        let response = await fetch("http://localhost:5000/api/DisplayData", {
            method: "GET"
        })
        // .then(res => res.json()).then(res => {
        //     setCat(res[1])
        //     setProduct(res[0])
        // });
        response = await response.json();
        // console.log(response);
        setCat(response[1])
        setProduct(response[0])
    }

    useEffect(() => {
        GetCategory()
    }, [])

    const handleDelete = async (id) => {
        try {
            console.log(id);
            const response = await fetch(`http://localhost:5000/api/deleteProduct/${id}`, {
                method: 'DELETE'
            });
            const data = await response.json();
            if (response.status === 200) {
                alert('Document deleted Successfully')
                window.location.reload();
                // navigate('/admin-home')
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const displayTable = product.map((d) => {
        return (
            <>
                <tr className=''>
                    <th>{d.category}</th>
                    <th>{d.name}</th>
                    <th>{d.price}</th>
                    <th>{d.sale_price}</th>
                    <th>{d.company_name}</th>
                    <th>
                        <i class="fa fa-edit mx-3" onClick={() => navigate(`/edit-product/${d._id}`)}></i>
                    </th>
                    <th>
                        <i class="fa fa-trash mx-3" aria-hidden="true" onClick={() => handleDelete(d._id)}></i>
                    </th>
                </tr>
            </>
        )
    })

    return (
        <div>
            {/* {
                cat.map((m) => {
                    return (
                        <>
                            <h3 className='fw-bold'>{m.categoryname}</h3>
                            {
                                product.filter((f) => (f.category === m.categoryname)).map((data) => {
                                    return (
                                        <>
                                            <div>
                                                <h5>{data.name}<i class="fa fa-edit mx-3" onClick={() => navigate(`/edit-product/${data._id}`)}></i> <i class="fa fa-trash" aria-hidden="true" onClick={() => handleDelete(data._id)}></i> </h5>
                                                <p></p>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </>
                    )
                })
            } */}
            <table style={{ width: "100%" }}>
                <thead style={{ backgroundColor: "#153656", color: "#fff" }}>
                    <tr>
                        <th style={{ width: "15%" }}>Category</th>
                        <th style={{ width: "30%" }}>Name</th>
                        <th>Price</th>
                        <th>Sale Price</th>
                        <th>Company</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody style={{ backgroundColor: "#9dc9f4" }}>
                    {displayTable}
                </tbody>
            </table>
        </div>
    )
}
