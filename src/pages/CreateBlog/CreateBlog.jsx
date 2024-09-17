import React, { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CreateBlog = () => {
    //3rd approach
    const navigate = useNavigate()

    const [data, setData] = useState({
        title: "",
        subTitle: "",
        description: ""
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({
            ...data,
            [name]: value
        })

    }
    const handleSubmit = async (e) => {

        e.preventDefault();
        // send the above states data to api
        const response = await axios.post("https://cms-backend-suman.vercel.app/createBlog", data)
        if (response.status == 200) {
            alert(response.data.message)
            navigate("/")
        } else {
            alert("Something went wrong")
        }


        console.log(response);

    }

    return (
        <>

            <NavBar />
            <div className="flex items-center justify-center w-full min-h-screen bg-gray-100 pt-24 px-4">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                            <input type="text" id="title" name="title" onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subtitle" className="block text-gray-700 text-sm font-bold mb-2">Subtitle</label>
                            <input type="text" id="subtitle" name="subTitle" onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                            <textarea id="description" name="description" rows="4" onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" required></textarea>
                        </div>
                        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300">Submit</button>
                    </form>
                </div>

            </div>


        </>
    )
}

export default CreateBlog