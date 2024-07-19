import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditProduct() {

    // const [category, setCategory] = useState([]);
    const [Product, setProduct] = useState({})
    const [info, setInfo] = useState({});
    const [keys, setKeys] = useState([]);
    const [sizeString, SetSizeString] = useState(' ');
    const [size, setSize] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    const fetchedData = async () => {
        const id = params.productId;
        console.log(id);
        let response = await fetch(`http://localhost:5000/api/itemdisplay/${id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        response = await response.json();
        setProduct(response);
        console.log("Product", Product);
        setKeys(Object.keys(response.info))
        SetSizeString(response.sizes.join(' '))
        setInfo(response.info)
        console.log(info);
    }

    //find category info object
    function findObjectByField(arr, field, value) {
        for (let obj of arr) {
            if (obj[field] === value) {
                setKeys(Object.keys(obj.info));
                return obj.info;
            }
        }
        return null; // Return null if object not found
    }

    useEffect(() => {
        fetchedData();
    }, [])



    const handleChange = (event, key) => {
        const name = event.target.name
        console.log(name);
        const value = event.target.value;
        console.log(value);
        setInfo({ ...info, [name]: value });
    };


    const onchange = (event) => {
        const { name, value } = event.target;
        setProduct({ ...Product, [name]: value });
    };

    const handleSizeChange = (event) => {
        const { value } = event.target;
        const sizesArray = value.split(' ').map(size => size.trim());
        // Split values by comma and remove whitespace
        SetSizeString(value);
        setSize(sizesArray)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/editProduct/${Product._id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: Product.name,
                    category: Product.category,
                    price: Product.price,
                    sale_price: Product.sale_price,
                    company_name: Product.company_name,
                    sizes: size,
                    careinstructions: Product.careinstructions,
                    packContaxins: Product.packContains,
                    image: Product.image,
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
        <div className='addProductContainer'>
            <div className='addProductSubContainer'>
                <div className='addProductTitle'>
                    <h2 className='fw-bold mb-3' style={{ color: "#173451" }}>Edit Product</h2>
                </div>
                <div className='container'>
                    <div className='row mb-3'>
                        {/* <button onClick={() => console.log(Product)}>Credentials</button> */}
                        <div className='col'>
                            <label className='addProductlable'>Name: </label>
                            <input type='text' name='name' className='inputtag' value={Product.name} onChange={onchange}></input>
                        </div>
                        <div className='col'>
                            <label className='addProductlable'>Company Name: </label>
                            <input type='text' name='company_name' className='inputtag' value={Product.company_name} onChange={onchange}></input>
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col'>
                            <label className='addProductlable'>Category: </label>
                            {/* <div class="dropdown">
                              <span id='cat'>Category</span>
                              <div name='category' value={credentials.category} onChange={onchange} class="dropdown-content">
                                  {category.map((m) => <p onClick={() => {
                                      setCat(m.categoryname)
                                      credentials.category = m.categoryname
                                  }
                                  }>{m.categoryname}</p>)}
                              </div>
                          </div> */}
                            <input type='text' name='category' className='inputtag' value={Product.category} onChange={onchange}></input>
                        </div>
                        <div className='col-4'>
                            <label className='addProductlable'>Price: </label>
                            <input type='text' name='price' className='inputtag' value={Product.price} onChange={onchange}></input>
                        </div>
                        <div className='col-4'>
                            <label className='addProductlable'>Sale Price: </label>
                            <input type='text' name='sale_price' className='inputtag' value={Product.sale_price} onChange={onchange}></input>
                        </div>
                    </div>
                    <div className='row'>
                        {
                            keys.map((m) => {
                                return (
                                    <div className='col-6 mb-3'>
                                        <label className='addProductlable'>{m} : </label>
                                        <input name={m} type='text' className='inputtag' value={info[m]} onChange={(event, m) => handleChange(event, m)}></input>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label className='addProductlable mb-3'>Sizes: </label>
                            <input
                                type='text'
                                name='sizes'
                                className='inputtag'
                                onChange={handleSizeChange}
                                value={sizeString}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label className='addProductlable mb-3'>Pack Contains: </label>
                            <input type='text' name='packContains' className='inputtag' value={Product.packContains} onChange={onchange}></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label className='addProductlable mb-3'>Care Instructions: </label>
                            <input type='text' name='careinstructions' className='inputtag' value={Product.careinstructions} onChange={onchange}></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label className='addProductlable mb-3'>Image: </label>
                            <input type='text' name='image' className='inputtag' value={Product.image} onChange={onchange}></input>
                        </div>
                    </div>
                </div>
                <div className='mt-3 fs-5 ' style={{ display: "flex", justifyContent: "space-evenly" }}>
                    {/* <button onClick={() => console.log(credentials)}>credentials</button> */}
                    <button className='button px-3 py-1 rounded-3 text-light' onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}
