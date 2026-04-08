import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';
import BookCard from '../Ui/BookCard';

const ListedWishList = () => {

    const { wishList } = useContext(BookContext);
    

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {wishList.map((book, ind) => (
                    <BookCard key={ind} book={book} />
                ))}
            </div>
        </div>
    );
};

export default ListedWishList;