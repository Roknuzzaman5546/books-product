import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../Components/BookCard';

const Wishlist = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
      Promise.all(wishlist.map(id => axios.get(`https://gutendex.com/books/${id}`)))
        .then(responses => setBooks(responses.map(r => r.data)))
        .catch(console.error);
    }, []);
  
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map(book => <BookCard key={book.id} book={book} />)}
        </div>
      </div>
    );
};

export default Wishlist;