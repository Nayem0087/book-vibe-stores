import React from 'react';
import { FaRegStar } from 'react-icons/fa';

const BookCard = ({ book }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure className='p-10'>
                    <img className='rounded-xl h-60'
                        src={book.image}
                        alt={book.bookName} />
                </figure>
                <div className="card-body">
                    <div className='flex items-center gap-4'>
                        {book.tags.map((tag, ind) => (
                            <div key={ind} className="badge text-green-500 bg-green-200font-bold">{tag}</div>
                        ))}
                    </div>
                    <h2 className='font-bold text-2xl'>{book.bookName}</h2>
                    <h2 className="card-title">
                        {book.title}
                    </h2>
                    <p className='font-semibold text-lg'>{book.author}</p>
                    <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4 text-lg font-semibold">
                        <div className="">{book.category}</div>
                        <div className="flex items-center gap-2">{book.rating} <FaRegStar /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;