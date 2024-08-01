import React from 'react';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

function Cards({ data }) {
    
    return (
        <div className="bg-gray-100 min-h-screen pt-24 p-6">
            <div className="flex flex-wrap justify-center mx-auto max-w-screen-xl">
                {data.map(card => (
                    <Link to={`/singleBlog/${card._id}`} key={card.id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                        <div className="rounded overflow-hidden shadow-lg bg-white transform hover:scale-105 transition duration-300 ease-in-out">
                            <div className="px-6 py-4">
                                <div className="font-bold text-2xl mb-2 text-gray-800">{card.title}</div>
                                <div className="text-gray-600 text-sm mb-4">{card.subTitle}</div>
                                <p className="text-gray-700 text-base">{card.description}</p>
                                <Link to={`/singleBlog/${card._id}`} style={{ background: "#FF7F7F", padding: "2px", alignItems: "center", display: "flex", justifyContent: "right" }}  >See More</Link>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Cards;
