import react, {useState} from "react";
import { AddCategory } from "./components/AddCategory";

import { GifGrid } from "./components/GifGrid";

//Funcional Component
const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['One Punch'])
    
    // const handleAdd = () =>{
    //     //forma directa.
    //     //setCategories([...categories,'Yo']);
    //     setCategories( cats => [...cats,'Yo']);
    // }

    return (
        <> 
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>
            {
            //<button onClick={handleAdd}>Agregar</button>
            }
            
            <ol>
                {
                    categories.map(category =>(
                        <GifGrid 
                            key={category}
                            category= {category}
                        />

                        )
                    )
                    
                    
                }
            </ol>
        </>
    )
}

export default GifExpertApp;