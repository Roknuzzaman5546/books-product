import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center shadow-md">
            <h1 className="text-xl font-bold">📚 Gutendex Books</h1>
            <div className="space-x-4">
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/wishlist" className="hover:underline">Wishlist</Link>
            </div>
        </nav>
    );
};

export default Navbar;