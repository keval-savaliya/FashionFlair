import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/GetAllCategory.css'

export default function GetAllCategory() {

    const [cat, setCat] = useState([]);
    const navigate = useNavigate();

    const GetCategory = async () => {
        let response = await fetch("http://localhost:5000/api/GetCategory", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await response.json();
        setCat(response[0])
    }
    useEffect(() => {
        GetCategory()
    }, [])

    const handleDelete = async (id) => {
        try {
            console.log(id);
            const response = await fetch(`http://localhost:5000/api/deleteCategory/${id}`, {
                method: 'DELETE'
            });
            const data = await response.json();
            if (response.status === 200) {
                alert('Document deleted Successfully')
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const displayTable = cat.map((d) => {
        return (
            <>
                <tr className=''>
                    <th>{d.categoryname}</th>
                    <th>{
                        d.info !== undefined
                            ? d.info.join(',  ')
                            : ""
                    }</th>
                    <th>
                        <i class="fa fa-edit mx-3" onClick={() => navigate(`/edit-category/${d._id}`)}></i>
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
                            <h3>{m.categoryname}<i class="fa fa-edit mx-3" onClick={() => navigate(`/edit-category/${m._id}`)}></i><i class="fa fa-trash" aria-hidden="true" onClick={() => handleDelete(m._id)}></i></h3>
                        </>
                    )
                })
            } */}
            <table style={{ width: "100%" }}>
                <thead style={{ backgroundColor: "#153656", color: "#fff" }}>
                    <tr>
                        <th>Name</th>
                        <th>Fields</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody style={{ backgroundColor: "#9dc9f4" }}>
                    {displayTable}
                    {/* {
                    cat.info !== undefined && cat.info.length !== 0 ?
                        cat.info.map((d) => {
                            return (
                                <>
                                    <tr className=''>
                                        <th>{d}</th>
                                        <th>
                                            <i class="fa fa-edit mx-3" onClick={() => navigate(`/edit-product/${d._id}`)}></i>
                                            <i class="fa fa-trash" aria-hidden="true" onClick={() => handleDelete(d._id)}></i>
                                        </th>
                                    </tr>
                                </>
                            )
                        }) : ""
                } */}
                </tbody>
            </table>
        </div>
    )
}
