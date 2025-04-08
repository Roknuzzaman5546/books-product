import React from 'react';
import Spinner from './Spinner';

const Loading = () => {
    return (
        <div className=' flex flex-col justify-center items-center my-20'>
            <Spinner></Spinner>
        </div>
    );
};

export default Loading;