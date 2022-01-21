import { getGifs } from "../helpers/GetGifs"
import { useState, useEffect } from 'react';

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading:true
    });

    useEffect(() => {
        getGifs(category)
        .then( imgs => {
                setState({
                    data:imgs,
                    loading: false
                })
        }) 
        
    }, [category]);  //para que solo se vuelva a ejecutar si cambia la categoria 
    

    return state; //{data:[], loading:true}
}
