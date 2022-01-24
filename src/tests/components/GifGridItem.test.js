import React from "react";
//import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

import {GifGridItem} from '../../components/GifGridItem'

//Para usar el enzyme
/* Referencias:
        https://enzymejs.github.io/enzyme/
        https://github.com/wojtekmaj/enzyme-adapter-react-17 -> este quiza no es necesario
        https://www.npmjs.com/package/enzyme-to-json 
        
        */
        /* Se debe de instalar
            *npm install --save-dev @wojtekmaj/enzyme-adapter-react-17 -> este quiza no es necesario
            npm i --save-dev enzyme enzyme-adapter-react-16
            npm install --save-dev enzyme-to-json
        */
        /* se debe de configurar en setupTests.js
            import Enzyme from 'enzyme';
            import Adapter from 'enzyme-adapter-react-16';
            import {createSerializer} from 'enzyme-to-json';

            Enzyme.configure({ adapter: new Adapter() });

            expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));
        
        */

describe('Pruebas en <GifGridItem /> component', () => {
    const titulo = 'Titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title={titulo} url={url} />);
        
    test('Debe de mostrar < GifGridItem /> correctamente', () => {
        
        //se crea un snapshot en la carpeta de test
        expect (wrapper).toMatchSnapshot();
    })

    test('Debe de tener un Parrafo con el titulo', () => {
      
        const p= wrapper.find('p');
        expect ( p.text()).toBe(titulo);

    });

    test('Debe de tener la imagen url y alt igual a los props', () => {
      const img = wrapper.find('img');
      //console.log ( img.html());  // es para logear tal cual el html
      //console.log ( img.props()); // Para ver las propiedades de ese elemento  
      expect ( img.prop('src')).toBe(url);
      expect ( img.prop('alt')).toBe(titulo);

    });
    
    test('Debe de contener la clase animate__fadeIn', () => {
      
      const class1= 'animate__fadeIn';  
      const div = wrapper.find('div');
       
      //console.log ( div.prop('className'));
      expect( div.prop('className')).toContain(class1);

      //misma validacion pero usando boolean
      const className = div.prop('className');
      expect (className.includes(class1)).toBe(true);

    });
    
    
});
