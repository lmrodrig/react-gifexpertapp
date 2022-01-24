import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks';

//Se usa para definir un tiempo de resp en llamadas async
jest.setTimeout(30000);
 
describe('Pruebas en el hook useFetchGifs', () => {
    
    test('debe de retornar el estado inicial', async() => {
        //Para probar CustomHooks se  debe de instalar la dependencia
        //npm install --save-dev @testing-library/react-hooks
        //https://react-hooks-testing-library.com/installation
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
        const { data, loading } = result.current; //aqui se sacan los valores del hook

        //default timeout value is 1000 1s
        //Para simular el useEffect
        await waitForNextUpdate();
       // console.log(data,loading);
        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

    })

    test('debe de retornar un arreglo de imgs y el loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
        await waitForNextUpdate();

        const { data, loading } = result.current;
       // console.log(data,loading);
        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false ); 
    });
    
    
    
})



