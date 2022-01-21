import React from 'react'

export const GifGridItem = ( { title, url}) => {

    //react toma className como class de CSS
    return (
        <div className='card animate__animated animate__fadeIn'>
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}
