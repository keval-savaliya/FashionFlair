import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditCategory() {
    const navigate = useNavigate();
    const params = useParams();
    const [cat, setCat] = useState({});
    const [info, setinfo] = useState([]);

    const GetCategory = async () => {
        console.log(params.catId);
        let response = await fetch(`http://localhost:5000/api/detailcategory/${params.catId}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        response = await response.json();
        setCat(response[0])
        setinfo(cat.info)
        console.log(info);
    }

    useEffect(() => {
        GetCategory()
    }, {})

    const addValue = (newValue) => {
        setinfo(prev => [...prev, newValue]);
        document.getElementById("infoInput").value = "";
    }
    const removeValue = (valueToRemove) => {
        setinfo(prev => prev.filter(item => item !== valueToRemove));
    }

    const onchange = (e) => {
        setCat({ ...cat, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/editCategory/${cat._id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: cat.categoryname,
                    image: cat.image,
                    info: info
                }),
            }
            );
            const json = await response.json();
            console.log(json);
            if (response.status === 200) {
                alert("Product edited Successfully")
                navigate('/admin-home')
            } else {
                alert("Enter Credentials Properly")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className='addProductContainer'>
                <div className='addProductSubContainer'>
                    <div className='addProductTitle mb-5'>
                        <h2>Edit Category</h2>
                    </div>
                    <div className='container'>
                        <div className='row mb-2 d-flex justify-content-center'>
                            <div className='col'>
                                <label className='addProductlable'>Category Name: </label>
                                <input name='categoryname' value={cat.categoryname} type='text' className='inputtag' onChange={onchange}></input>
                            </div>
                        </div>
                        <div className='row mb-2 d-flex justify-content-center'>
                            <div className='col'>
                                <label className='addProductlable'>Image: </label>
                                <input name='image' value={cat.image} type='text' className='inputtag' onChange={onchange}></input>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <input id='infoInput' className='text-dark me-3'></input>
                            <button className='button p-1 text-light me-3' onClick={() => addValue(document.getElementById('infoInput').value)}>Add Field</button>
                            <button className='button p-1 text-light' onClick={() => console.log(info)}>value</button>
                        </div>
                        <div className='row'>
                            {
                                info !== undefined
                                    ?
                                    info.map(m => (
                                        <>
                                            <div className='d-flex mb-2'>
                                                <h6 className='fw-bold me-3'>{m}</h6>
                                                <button className='button p-1 text-light' onClick={() => removeValue(m)}>Remove Field</button>
                                            </div>


                                        </>
                                    )
                                    ) : <div></div>
                            }
                        </div>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <button className='button p-2 text-light fw-bold fs-5 rounded-3 mt-4' onClick={handleSubmit}>Submit</button>
                        </div>
                        {/* <div className='row'>
            <div className='border '>
            
            </div>
          </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
