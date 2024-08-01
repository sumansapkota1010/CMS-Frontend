import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Card from '../../components/Card/Card'
import axios from 'axios'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
    const [data, setData] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:8000/blogs/").then((res) => {
            setData(res.data.data)
            console.log(res.data.data)
        })

    }

    useEffect(() => {
        fetchData();

    }, [])





    return (
        <>


            <NavBar />
            <div className="w-full p-1">
                <Card data={data} />
            </div>
            <ToastContainer />
        </>
    )
}

export default Home