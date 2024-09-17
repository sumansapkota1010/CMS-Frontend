import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const UpdateBlog = () => {
    const navigate = useNavigate();

    const { id } = useParams();

    const [blog, setBlog] = useState({})


    const handleChange = (e) => {
        const { name, value } = e.target
        setBlog({
            ...blog,
            [name]: value
        })


    }
    const handleUpdate = async (e) => {
        e.preventDefault()
        const response = await axios.patch("https://cms-backend-suman.vercel.app/blogs/" + id, blog)
        if (response.status == 200) {
            navigate("/singleBlog/" + id)
        }
    }



    const fetchSingleData = async () => {
        const response = await axios.get("https://cms-backend-suman.vercel.app/blogs/" + id)

        if (response.status == 200) {
            setBlog(response.data.data)
        }
    }
    useEffect(() => {
        fetchSingleData();
    }, [])


    console.log(blog)

    return (
        <>
            <NavBar />


            <div className="flex items-center justify-center w-full min-h-screen bg-gray-100 pt-24 px-4">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
                    <h1 className='font-bold m-8 text-center'>Update Blog</h1>
                    <form onSubmit={handleUpdate}>
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                            <input type="text" id="title" name="title" value={blog.title} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subtitle" className="block text-gray-700 text-sm font-bold mb-2">Subtitle</label>
                            <input type="text" id="subtitle" name="subTitle" value={blog.subTitle} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                            <textarea id="description" name="description" rows="4" value={blog.description} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required></textarea>
                        </div>
                        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300">Submit</button>
                    </form>
                </div>

            </div>



        </>
    )
}

export default UpdateBlog