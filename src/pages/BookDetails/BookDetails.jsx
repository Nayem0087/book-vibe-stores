import React, { use, useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../Context/BookProvider';

const booksPromise = fetch('/booksData.json')
    .then((res) => res.json());

const BookDetails = () => {

    const { booksId: bookParamsId } = useParams();
    

    // const books = use(booksPromise);

    const books = useLoaderData();
  

    const expectedBook = books.find((book) => book.booksId == bookParamsId);

    const {bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = expectedBook;

    const {handleMarkAsRead, handleWishList} = useContext(BookContext);
    console.log(handleMarkAsRead, handleWishList);

   

    return (
        <div className="grid lg:grid-cols-2 shadow-sm max-w-[90%] mx-auto my-10">
            <figure className='w-full flex items-center justify-center bg-gray-100 px-5 py-10 rounded-lg'>
                <img
                    src={image}
                    alt="Album" className='max-h-100'/>
            </figure>
            <div className="card-body space-y-3">
                <h2 className="card-title text-2xl">{bookName}</h2>
                <h2 className='card-title'>By: {author}</h2>
                <p className='py-2 border-y font-semibold'>{category}</p>
                <p>Review: {review}</p>
                <div className='flex items-center gap-4'>
                    {tags.map((tag, ind) => (
                        <div key={ind} className="badge text-green-500 bg-green-200font-bold">{tag}</div>
                    ))}
                </div>
                <div className='border-t space-y-3 pt-4 font-semibold'>
                      <div className='flex gap-6'>
                        <span>Number of pages</span> <span>{totalPages}</span>
                    </div>
                    <div className='flex gap-6'>
                        <span>Publisher:</span> <span>{publisher}</span>
                    </div>
                    <div className='flex gap-6'>
                        <span>YearOfPublishing</span> <span>{yearOfPublishing}</span>
                    </div>
                </div>
                <div className='flex items-center gap-6'>
                    <button className="btn " onClick={() => handleMarkAsRead(expectedBook)}>Mark As Read</button>
                    <button className="btn btn-primary" onClick={() => handleWishList(expectedBook)}>Add To WishList</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;