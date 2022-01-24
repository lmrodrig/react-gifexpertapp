import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';


describe('Probando GifExpertApp..', () => {
    test('Debe de Mostrar correctamente la applicacion', () => {
      
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de validar el tamaño de una lista de categorias por default ', () => {
        const categories = ['One Punch', 'Dragon Ball'];

        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    });
    
    
});
