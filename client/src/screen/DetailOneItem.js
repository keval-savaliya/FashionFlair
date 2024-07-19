import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavDetail from "../components/NavDetail";
import { Link } from "react-router-dom";
import { useDispatchCart, useCart } from "../components/ContextReducer";
import { UserEmail } from './Login'

function DetailCategory() {

    const navigate = useNavigate();
    const param = useParams();

    const [maindata, setMaindata] = useState({ category: "", name: "", price: "", sale_price: "", company_name: "", rating: "", image: "", sizes: [], careinstructions: "", packContains: "", info: {} })
    const [keys, setKeys] = useState([])
    const [values, setValues] = useState([])
    const [size, setSize] = useState('');

    useEffect(() => {
        const fetchedData = async () => {
            let response = await fetch(`http://localhost:5000/api/itemdisplay/${param.id}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            response = await response.json();
            setMaindata(response)
            setKeys(Object.keys(response.info))
            setValues(Object.values(response.info))
        }
        fetchedData();
    }, {})


    const handleAddToCart = async (e) => {
        e.preventDefault();
        const email = localStorage.getItem("email");
        const response = await fetch(`http://localhost:5000/api/addtocart/${email}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: maindata.name, category: maindata.category, company_name: maindata.company_name, price: maindata.price, sale_price: maindata.sale_price, image: maindata.image, size: size })
        })
        navigate('/cart')
    }

    const selectSize = (e) => {
        // console.log(e);
        setSize(e);
    }

    const sizes = maindata.sizes;

    const sizesMap = sizes.map((f) => {
        return (
            <h5 className={f === size ? 'bg-secondary mx-3' : 'mx-3'} onClick={() => selectSize(f)} style={{ border: "1px solid grey", borderRadius: "20px", width: "50px", textAlign: "center" }}>{f}</h5>
        )
    })
    // console.log(sizes);

    // console.log(`from Detail : ${Data}`)

    return (
        <>
            <Navbar />
            <div className="row w-100" style={{ marginTop: "100px" }}>
                <div className="col-4" style={{ marginTop: "20px" }}>
                    <img src={maindata.image} alt="..." style={{ height: "550px", marginLeft: "50px", width: "90%" }} />
                </div>
                <div className="col-8" style={{ marginTop: "20px" }}>
                    <div>
                        <h3 className="fw-bold">{maindata.company_name}</h3>
                        <h5 style={{ fontSize: "1.2em" }}>Womens {maindata.name}</h5>
                    </div>
                    <div className="d-flex justify-content-center" style={{ width: "75px", height: "37px", border: "1px solid #8a8d8e", padding: "5px", marginTop: "20px" }}>
                        <h3 style={{ fontSize: "1.4em", fontWeight: "500" }}>{maindata.rating} <span className="me-1"></span> <i class='fa fa-star'></i></h3>
                    </div>
                    <div className="mt-3">
                        <h3 style={{ fontSize: "2em", fontWeight: "550" }}><i class="fa fa-rupee"></i><span className="me-1"></span>{maindata.sale_price}</h3>
                    </div>
                    <div className="mt-1">
                        <h3 style={{ fontSize: "1em", color: "grey" }}>MRP <span className="me-2"></span> <i class="fa fa-rupee"></i><span className="me-1"></span> <span style={{ textDecoration: "line-through" }}>{maindata.price}</span> <span className="me-1"></span> Inclusive of all taxes</h3>
                    </div>
                    <div className="my-3" style={{ borderBottom: "1px solid #8a8d8e", marginRight: "10px" }}>
                    </div>
                    <div style={{ color: "black", }}>
                        <h3 style={{ fontWeight: "bold" }}>Select Sizes</h3>
                        <div className="d-flex">
                            {sizesMap}
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <button className="btn py-2 px-3" style={{ border: "1px solid #8a8d8e" }}><i class="fa fa-heart-o"></i><span className="me-2"></span>
                                Add to Wishlist
                            </button>
                        </div>
                        <div className="col">
                            <button className="btn py-2 px-3 bg-dark text-light" style={{ border: "1px solid #8a8d8e" }} onClick={handleAddToCart}><i class="fa fa-heart-o"></i><span className="me-2"></span>
                                Add to Bag
                            </button>
                        </div>
                    </div>
                    <div className="my-4" style={{ border: "1px solid #8a8d8e" }}></div>
                    <div className="row">
                        <h3 style={{ fontWeight: "600" }}>Product Information</h3>
                        <div className="col ps-5">
                            <div>
                                <h5 style={{ color: "#656565" }}>{keys[0]}</h5>
                                <h5>{values[0]}</h5>
                            </div>
                            <div className="mt-3">
                                <h5 style={{ color: "#656565" }}>{keys[1]}</h5>
                                <h5>{values[1]}</h5>
                            </div>
                            <div className="mt-3">
                                <h5 style={{ color: "#656565" }}>{keys[2]}</h5>
                                <h5>{values[2]}</h5>
                            </div>
                            <div className="mt-3">
                                <h5 style={{ color: "#656565" }}>{keys[3]}</h5>
                                <h5>{values[3]}</h5>
                            </div>
                        </div>
                        <div className="col ps-4" style={{ borderLeft: "1px solid #8a8d8e" }}>
                            <div>
                                <h5 style={{ color: "#656565" }}>{keys[4]}</h5>
                                <h5>{values[4]}</h5>
                            </div>
                            <div className="mt-3">
                                <h5 style={{ color: "#656565" }}>{keys[5]}</h5>
                                <h5>{values[5]}</h5>
                            </div>
                            <div className="mt-3">
                                <h5 style={{ color: "#656565" }}>{keys[6]}</h5>
                                <h5>{values[6]}</h5>
                            </div>
                            <div className="mt-3">
                                <h5 style={{ color: "#656565" }}>{keys[7]}</h5>
                                <h5>{values[7]}</h5>
                            </div>
                        </div>
                        <div className="ps-5 mt-3">
                            <h5 style={{ color: "#656565" }}>Care Instructions</h5>
                            <h5 >{maindata.careinstructions}</h5>
                        </div>
                        <div className="ps-5 mt-4">
                            <h5 style={{ color: "#656565" }}>Pack Contains</h5>
                            <h5 >{maindata.packContains}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DetailCategory