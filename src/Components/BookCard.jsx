// this is bookCard pages
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { GiSelfLove } from "react-icons/gi";
import { GiRoyalLove } from "react-icons/gi";
import { toast } from 'react-toastify';

const BookCard = ({ book, wishlist, onWishlistToggle, isItWishLIst }) => {
    const cardRef = useRef(null);
    const isWishlisted = wishlist.includes(book.id);

    const toggleWishlist = () => {
        onWishlistToggle(book.id);
        if (isWishlisted) {
            toast.info(`${book.title} removed from wishlist.`);
            if (isItWishLIst) {
                setTimeout(() => {
                    window.location.reload();
                }, 1500)
            }
        } else {
            toast.success(`${book.title} added to wishlist!`);
        }
    };

    // Scroll animation same thakbe...
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-10');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                    } else {
                        entry.target.classList.add('opacity-0', 'translate-y-10');
                        entry.target.classList.remove('opacity-100', 'translate-y-0');
                    }
                });
            },
            { threshold: 0.2 }
        );
        if (cardRef.current) {
            observer.observe(cardRef.current);
        }
        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className="opacity-0 translate-y-10 transition-all duration-700 transform border rounded-lg shadow p-4 flex flex-col gap-2"
        >
            <div className='overflow-hidden rounded'>
                <img
                    src={book.formats['image/jpeg']}
                    alt={book.title}
                    className="w-full h-64 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
            </div>
            <h3 className="text-lg font-semibold line-clamp-1">{book.title}</h3>
            <p className="text-gray-700">{book.authors?.[0]?.name || 'Unknown Author'}</p>
            <p className="text-sm text-gray-500 line-clamp-1">{book.subjects?.[0]}</p>
            <p className="text-xs">ID: {book.id}</p>
            <div className="flex justify-between items-center mt-1">
                <button onClick={toggleWishlist} className="text-2xl">
                    {isWishlisted ? <GiRoyalLove className='text-blue-600' /> : <GiSelfLove className='text-blue-600' />}
                </button>
                <Link to={`/book/${book.id}`} className="text-blue-600 underline">
                    Details
                </Link>
            </div>
        </div>
    );
};


export default BookCard;
