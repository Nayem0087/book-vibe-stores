import React, { useContext } from 'react';
import { BookContext } from '../../../Context/BookProvider';

const Books = () => {

    const { storedBooks } = useContext(BookContext);
    console.log(storedBooks, 'bookContext');

    return (
        <div>
            Listed Books
        </div>
    );
};

export default Books;