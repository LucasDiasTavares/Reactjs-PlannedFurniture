import React from 'react';
import loadingGif from '../../images/gif/loading-arrow.gif';


export default function index() {
    return (
        <div className='loading'>
            <h4>Furnitures data loading...</h4>
            <img src={loadingGif} alt="loading" />
        </div>
    )
}
