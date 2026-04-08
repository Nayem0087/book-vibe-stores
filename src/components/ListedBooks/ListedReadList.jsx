import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';
import BookCard from '../Ui/BookCard';

const ListedReadList = () => {

    const { storedBooks } = useContext(BookContext);


    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {storedBooks.map((book, ind) => (
                    <BookCard key={ind} book={book} />
                ))}
            </div>
        </div>
    );
};

export default ListedReadList;