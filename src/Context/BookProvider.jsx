import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext();

const BookProvider = ({ children }) => {

    const [storedBooks, setStoredBooks] = useState([]);
    const [wishList, setWishlist] = useState([]);

    const handleMarkAsRead = (currentBook) => {
        // 1. store book id or store book object
        // 2. where to store
        // 3. array or collection
        // 4. if the book is already exist then show a alert or toast
        // 5. if not then add the book in the array or collection
        const isExistBook = storedBooks.find((book) => book.bookId === currentBook.bookId);
        if (isExistBook) {
            toast.error(`${currentBook.bookName} is is already exist to list`)
        } else {
            setStoredBooks([...storedBooks, currentBook]);
            toast.success(`${currentBook.bookName} is added to read list`)
        }
        console.log(currentBook, storedBooks, 'book');
    }

    const handleWishList = (currentBook) => {
        // 1. store book id or store book object
        // 2. where to store
        // 3. array or collection
        // 4. if the book is already exist then show a alert or toast
        // 5. if not then add the book in the array or collection

        const isExistInReadList = storedBooks.find((book) => book.bookId === currentBook.bookId);

        if(isExistInReadList) {
            toast.error(`${currentBook.bookName} is is already in read list`);
            return;
        }
        console.log('found:', isExistInReadList);

         const isExistBook = wishList.find((book) => book.bookId === currentBook.bookId);

       
        if (isExistBook) {
            toast.error(`${currentBook.bookName} is is already exist to list`)
        } else {
            setWishlist([...wishList, currentBook]);
            toast.success(`${currentBook.bookName} is added to list`)
        }
        console.log(currentBook, storedBooks, wishList, 'book');
    }

    const data = {
            storedBooks,
            setStoredBooks,
            handleMarkAsRead,
            wishList,
            setWishlist,
            handleWishList
        }

    return (
        <div>
            <BookContext.Provider value={data}>
                {children}
            </BookContext.Provider>
        </div>
    );
};

export default BookProvider;