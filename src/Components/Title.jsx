import React, { useEffect } from 'react';

const Title = (title) => {
    return (
        useEffect(()=>{
            document.title=`Plant Care | ${title}`
        },[title])
    );
};

export default Title;