import '@testing-library/jest-dom'
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

//const setCat = () => {}; jest.fn hace lo mismo para simular una funcion
const setCat = jest.fn();
let wrapper = shallow( <AddCategory setCategories={ setCat} />); 

beforeEach( () => {
    jest.clearAllMocks();
    wrapper = shallow( <AddCategory setCategories={ setCat} />); 
});

describe('Pruebas en <AddCategory /> component', () => {
    // Modo corto de enviar una funcion como parametro
    //const wrapper = shallow( <AddCategory setCategories={ ()=>{}} />);
       
    test('Debe de mostrar < AddCategory /> correctamente', () => {
        
        //se crea un snapshot en la carpeta de test
        expect (wrapper).toMatchSnapshot();
    })

    test('Debe de cambiar el valor del Input box', () => {
       const input = wrapper.find('input');
       const valor = 'Hola Mundo';

       //estamos simulando el parametro de este handler: setInputValue(e.target.value);
       input.simulate('change', {
           target : {
               value : valor
           }
       });

       expect( wrapper.find('p').text().trim()).toBe(valor);

    });

    test('No debe de postear con onSubmit ', () => {
      wrapper.find('form').simulate('submit',{
        preventDefault(){}
      });
    });
    //como input no se envio (esta vacio) no es >2 no se debe de llamar setCategories
    expect( setCat ).not.toHaveBeenCalled();

    test('Debe de llamar a la fn setCategories y limpiar el input Box', () => {
    
        const input = wrapper.find('input');
        const valor = 'Hola Mundo';
        //1.- Simular el input change
        input.simulate('change', {
            target : {
                value : valor
            }
        });

        //2.- simular el submit
        wrapper.find('form').simulate('submit', {
              preventDefault(){}
        })

        //3.- setCategories se debe haber llamado
        expect(setCat).toHaveBeenCalled();

        //4.- el valor del input box debe ser ''
        expect(wrapper.find('input').prop('value')).toBe('');

    });
    
    
})