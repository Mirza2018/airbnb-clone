import React from 'react';
import Item from './Item';

const Items = () => {
    return (
        <div className="mx-5 md:mx-8 lg:mx-12 xl:mx-16  ">
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 '>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>

            </div>
        </div>
    );
};

export default Items;