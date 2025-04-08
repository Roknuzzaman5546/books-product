import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../Components/BookCard';
import Loading from '../Components/loading';
import BookList from '../Components/BookList';

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState(localStorage.getItem('search') || '');
    const [genre, setGenre] = useState(localStorage.getItem('genre') || '');
    const [page, setPage] = useState(1);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://gutendex.com/books?page=${page}`)
            .then(res => {
                setBooks(res.data.results);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false); // in case of error
            });
    }, [page]);


    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(search.toLowerCase()) &&
        (genre === '' || book.subjects?.some(s => s.toLowerCase().includes(genre.toLowerCase())))
    );

    useEffect(() => {
        localStorage.setItem('search', search);
        localStorage.setItem('genre', genre);
    }, [search, genre]);

    return (
        <div className="space-y-6 md:container w-11/12 mx-auto my-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="border p-2 rounded w-full md:w-1/2"
                />
                <select
                    value={genre}
                    onChange={e => setGenre(e.target.value)}
                    className="border p-2 rounded w-full md:w-1/5 cursor-pointer"
                >
                    <option value="">All Genres</option>
                    <option value="fiction">Fiction</option>
                    <option value="history">History</option>
                    <option value="science">Science</option>
                </select>
            </div>
            {loading ? (
                <div className="flex justify-center items-center w-full col-span-full">
                    <Loading />
                </div>
            ) : (
                filteredBooks.length > 0 ? (
                    <>
                        <BookList books={filteredBooks} />
                    </>
                ) : (
                    <p className="text-center col-span-full text-gray-500">No books found.</p>
                )
            )}
            <div className="flex justify-center gap-4 mt-5">
                <button
                    onClick={() => setPage(p => Math.max(p - 1, 1))}
                    className="group relative flex w-28 items-center rounded-lg border-2 border-blue-500 p-3 text-blue-500"><span>Previous</span><span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-blue-500 duration-300 group-hover:w-5/6"><svg viewBox="0 0 24 24" fill="none" className="w-10 rotate-180" xmlns="http://www.w3.org/2000/svg">
                        <g strokeWidth="0"></g>
                        <g strokeLinecap="round" strokeLinejoin="round"></g>
                        <g>
                            <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </g>
                    </svg></span>
                </button>
                <span className="px-4 py-2 text-lg font-serif items-center">Page {page}</span>
                <button
                    onClick={() => setPage(p => p + 1)}
                    className="group relative flex w-28 items-center rounded-lg border-2 border-blue-500 p-3 text-blue-500"><span className=' ml-7'>Next</span><span className="absolute left-3 box-content flex w-1/6 justify-center rounded-md bg-blue-500 duration-300 group-hover:w-5/6"><svg viewBox="0 0 24 24" fill="none" className="w-10" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span>
                </button>

            </div>
        </div>
    );
};

export default Home;