import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import NavDetail from "../components/NavDetail";
import { Link } from "react-router-dom";

function DetailCategory() {
    const navigate = useNavigate();
    const param = useParams();

    const [dress, setDress] = useState()
    const [keys, setKeys] = useState([])
    const [values, setValues] = useState([])

    useEffect(() => {
        const fetchedData = async () => {
            let response = await fetch("http://localhost:5000/api/onedress/65b11a1f3c2d1ebacad4799b", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            response = await response.json();
            setDress(response)
            // console.log(response)
            // console.log(Object.keys(response.info))
            setKeys(Object.keys(response.info))
            setValues(Object.values(response.info))
        }
        fetchedData();
    }, [param.id])

    // console.log(`from Detail : ${Data}`)

    return (
        <>
            <Navbar />
            <NavDetail />
            <div style={{ marginTop: "200px" }}>
                <h1>{keys[0]}</h1>
                <h1>{values[0]}</h1>
            </div>
        </>
    )
}
export default DetailCategory