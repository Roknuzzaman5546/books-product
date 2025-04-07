import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from '../Components/BookCard';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState(localStorage.getItem('search') || '');
    const [genre, setGenre] = useState(localStorage.getItem('genre') || '');
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios.get(`https://gutendex.com/books?page=${page}`)
            .then(res => setBooks(res.data.results));
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
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
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
                    className="border p-2 rounded w-full md:w-1/3"
                >
                    <option value="">All Genres</option>
                    <option value="fiction">Fiction</option>
                    <option value="history">History</option>
                    <option value="science">Science</option>
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredBooks.map(book => <BookCard key={book.id} book={book} />)}
            </div>

            <div className="flex justify-center gap-4">
                <button
                    onClick={() => setPage(p => Math.max(p - 1, 1))}
                    className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
                >
                    Previous
                </button>
                <span className="px-4 py-2">Page {page}</span>
                <button
                    onClick={() => setPage(p => p + 1)}
                    className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Home;