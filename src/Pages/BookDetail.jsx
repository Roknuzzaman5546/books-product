import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Components/loading';

const BookDetail = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
  
    useEffect(() => {
      axios.get(`https://gutendex.com/books/${id}`)
        .then(res => setBook(res.data));
    }, [id]);
  
    if (!book) return <Loading></Loading>;
  
    return (
      <div className="max-w-3xl mx-auto my-8">
        <img
          src={book.formats['image/jpeg']}
          alt={book.title}
          className="w-full h-96 object-cover rounded mb-4"
        />
        <h2 className="text-3xl font-bold mb-2">{book.title}</h2>
        <p className="text-sm mt-2">ID: {book.id}</p>
        <p className="text-md text-gray-500">Genres: {book.subjects?.join(', ')}</p>
        <p className="text-lg text-gray-700">Author: {book.authors?.[0]?.name || 'Unknown'}</p>
        <p className="text-lg text-gray-700 mt-1">Summaries: {book.summaries?.[0]|| 'Unknown'}</p>
      </div>
    );
};

export default BookDetail;