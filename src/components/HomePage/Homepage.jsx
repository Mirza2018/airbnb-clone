import React from 'react';
import Categories from './Categories';
import Items from './Items/Items';
import ApiProvider from '@/Context/ApiProvider';

const Homepage = () => {
    return (
        <div>
            <ApiProvider>
            <Categories/>
            <Items/>
            </ApiProvider>
        </div>
    );
};

export default Homepage;