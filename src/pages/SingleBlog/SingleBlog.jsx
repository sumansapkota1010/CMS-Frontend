import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const SingleBlog = () => {

    const [singleData, setSingleData] = useState({})

    const { id } = useParams();

    const navigate = useNavigate();


    // Delete Blog

    const deleteBlog = async () => {
        const response = await axios.delete(`https://cms-backend-suman.vercel.app/blogs/${id}`)
        if (response.status == 200) {
            alert("Blog Deleted")
            navigate('/')
        }
    }



    const fetchSingleData = async () => {

        let response = await axios.get(`https://cms-backend-suman.vercel.app/blogs/${id}`)
        if (response.status == 200) {
            setSingleData(response.data.data)
        }



        console.log(singleData)
    }
    useEffect(() => {
        fetchSingleData()
    }, [])

    return (
        <>
            {

                <div class="bg-gray-100 p-4">
                    <div class="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto">
                        <h1 class="text-3xl font-bold text-gray-800 mb-2">{singleData.title}</h1>
                        <h2 class="text-xl text-gray-600 mb-4">{singleData.subTitle}</h2>
                        <p class="text-gray-700 leading-relaxed">
                            {singleData.description}
                        </p>
                        <button
                            class="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
                            onClick={deleteBlog}
                        >
                            Delete
                        </button>
                        <Link to={`/updateBlog/${singleData._id}`} style={{ background: "red", color: "white", padding: "8px", margin: "4px" }}>Update</Link>
                        <Link to="/" style={{ background: "red", color: "white", padding: "8px", margin: "4px" }}>Home</Link>

                    </div>
                </div>



            }


        </>
    )
}

export default SingleBlog