import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';  

import { useFetchGifs } from "../hooks/UseFetchGifs";
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/GetGifs';

export const GifGrid = ({ category}) => {

    
    //const [images, setImages] = useState([]);
    //Este Hook dice que solo se debe de ejecutar 1 sola vez
    //cuando se inicializa el componente.
    // useEffect(() => {
    //     //haremos una peticion HTTP con fetch
    //     getGifs(category)
    //     .then( imgs => setImages(imgs));
    // }, [category]); // Aqui solo le indica que si la categoria cambia se lanza otra vez
    //                 // la llamada a getGifs 
        
    // en el uso del map se pide tener una key unica en el GifGridItem
    // por eso se pone como propiedad del elemento
    // se puede confundir que es un parametro, pero no lo es. 

    //usando custom hooks
    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>

            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="card-grid">
                
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}