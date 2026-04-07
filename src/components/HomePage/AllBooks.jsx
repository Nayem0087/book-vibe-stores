import React, { use } from 'react';
import BookCard from '../Ui/BookCard';

const booksPromise = fetch('/booksData.json')
    .then(res => res.json());

const AllBooks = () => {

    const books = use(booksPromise);

    return (
        <div className='max-w-[90%] mx-auto'>
            <h3 className='font-bold text-5xl text-center mb-10'>Books</h3>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    books.map((book, ind) => {
                        return (
                            <BookCard key={ind} book={book}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AllBooks;