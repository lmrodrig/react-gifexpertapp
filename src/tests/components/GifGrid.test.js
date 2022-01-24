import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs'); //simula la llamada a ese componente
 
describe('Pruebas en el <GifGrid />', () => {

  const category = 'One Punch';


  test('debe de mostrarse correctamente', () => {


    //usa informacion por default para el mock de useFetch
      useFetchGifs.mockReturnValue({
          data: [],
          loading: true
      });

      const wrapper = shallow( <GifGrid category={ category } /> );
      expect( wrapper ).toMatchSnapshot();
      
  });

  test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
      
      const gifs = [{
          id: 'ABC',
          url: 'https://localhost/cualquier/cosa.jpg',
          title: 'Cualquier cosa'
      },
      {
          id: '123',
          url: 'https://localhost/cualquier/cosa.jpg',
          title: 'Cualquier cosa'
      }];

      //simula valores que regresaria la fn mock useFetchGifs
      useFetchGifs.mockReturnValue({
          data: gifs,
          loading: false
      });

      const wrapper = shallow( <GifGrid category={ category } /> );
      
      expect( wrapper ).toMatchSnapshot();
      expect( wrapper.find('p').exists() ).toBe(false);
      expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
  })
  
  

})