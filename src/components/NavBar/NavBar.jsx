import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="bg-gray-800 w-full fixed top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">

                    <div className="flex-shrink-0">
                        <Link to="/" className="text-white text-xl font-bold">Blog</Link>
                    </div>

                    <div className="absolute inset-x-0 flex items-center justify-center space-x-4">
                        <Link to="/" className="text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">
                            Home
                        </Link>
                        <Link to="/createBlog" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Create Blog
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
