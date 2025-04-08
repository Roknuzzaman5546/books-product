import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../Components/BookCard';
import Loading from '../Components/loading';
import BookList from '../Components/BookList';

const Wishlist = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isItWishLIst, setIsItWishList] = useState(true);

  useEffect(() => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    Promise.all(wishlist.map(id => axios.get(`https://gutendex.com/books/${id}`)))
      .then(responses => {
        setBooks(responses.map(r => r.data))
        setLoading(false);
        setIsItWishList(true);
      }
      )
      .catch(() => {
        setLoading(false); // in case of error
      });
  }, []);

  return (
    <div className=' md:container w-11/12 mx-auto my-8'>
      <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
        {loading ? (
          <div className="flex justify-center items-center w-full col-span-full">
            <Loading />
          </div>
        ) :
          <>
            <BookList books={books} isItWishLIst={isItWishLIst}  />
          </>
        }
    </div>
  );
};

export default Wishlist;