import React, { useContext } from 'react';
import { BookContext } from '../../../Context/BookProvider';

const Books = () => {

    const { storedBooks, wishList } = useContext(BookContext);
    console.log(storedBooks, wishList,  'bookContext');

    return (
        <div className='max-w-[90%] mx-auto flex flex-col gap-10'>
            Read list: {storedBooks.length}
            Wish list: {wishList.length}
        </div>
    );
};

export default Books;