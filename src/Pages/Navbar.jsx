import React from 'react';
import { Link } from 'react-router-dom';
import { IoBookSharp } from "react-icons/io5";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white px-4 py-4 shadow-md sticky top-0 left-0">
            <div className=' w-[97%] mx-auto flex justify-between items-center'>
                <Link to="/">
                    <h1 className="md:text-xl text-base font-bold flex items-center gap-2 justify-start">
                        <IoBookSharp className=' text-3xl' /> <p className=' font-serif'>Gutendex Books</p>
                    </h1>
                </Link>
                <div className="space-x-4">
                    <Link to="/" className="hover:underline text-base font-serif">Home</Link>
                    <Link to="/wishlist" className="hover:underline text-base font-serif">Wishlist</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;