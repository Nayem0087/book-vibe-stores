import React, { useContext } from 'react';
import { BookContext } from '../../../Context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../../components/ListedBooks/ListedReadList';
import ListedWishList from '../../../components/ListedBooks/ListedWishList';


const Books = () => {

    const { storedBooks, wishList } = useContext(BookContext);
    console.log(storedBooks, wishList, 'bookContext');

    return (
        <div className='max-w-[90%] mx-auto my-3Wish list: {wishList.length}'>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList/>
                </TabPanel>
                <TabPanel>
                    <ListedWishList/>
                </TabPanel>
            </Tabs>
        </div>

    );
};

export default Books;