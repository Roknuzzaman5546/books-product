import React from 'react';
import { Link } from 'react-router-dom';
import { GiSelfLove } from "react-icons/gi";
import { GiRoyalLove } from "react-icons/gi";

const BookCard = ({ book }) => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    const isWishlisted = wishlist.includes(book.id);

    const toggleWishlist = () => {
        const updated = isWishlisted
            ? wishlist.filter(id => id !== book.id)
            : [...wishlist, book.id];
        localStorage.setItem('wishlist', JSON.stringify(updated));
        window.location.reload();
    };

    return (
        <div className="border rounded-lg shadow p-4 flex flex-col gap-2">
            <img
                src={book.formats['image/jpeg']}
                alt={book.title}
                className="w-full h-64 object-cover rounded"
            />
            <h3 className="text-lg font-semibold line-clamp-1">{book.title}</h3>
            <p className="text-gray-700">{book.authors?.[0]?.name || 'Unknown Author'}</p>
            <p className="text-sm text-gray-500">{book.subjects?.[0]}</p>
            <p className="text-xs">ID: {book.id}</p>
            <div className="flex justify-between items-center mt-1">
                <button onClick={toggleWishlist} className="text-2xl">
                    {isWishlisted ? <GiRoyalLove className=' text-blue-600' /> : <GiSelfLove className='text-blue-600' />}
                </button>
                <Link to={`/book/${book.id}`} className="text-blue-600 underline">
                    Details
                </Link>
            </div>
        </div>
    );
};

export default BookCard;
