import React, { useState } from 'react';
import BookCard from './BookCard';

const BookList = ({ books, isItWishLIst }) => {
    const [wishlist, setWishlist] = useState(() => {
        return JSON.parse(localStorage.getItem('wishlist') || '[]');
    });

    const handleWishlistToggle = (bookId) => {
        const isAlreadyWishlisted = wishlist.includes(bookId);
        const updatedWishlist = isAlreadyWishlisted
            ? wishlist.filter(id => id !== bookId)
            : [...wishlist, bookId];

        setWishlist(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map(book => (
                <BookCard
                    key={book.id}
                    book={book}
                    wishlist={wishlist}
                    onWishlistToggle={handleWishlistToggle}
                    isItWishLIst={isItWishLIst}
                />
            ))}
        </div>
    );
};

export default BookList;
