import { shallow } from 'enzyme';
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en <AddCategory />', () => {

    const setCategories = () => {};
    const wrapper = shallow(<AddCategory setCategories={setCategories} />);
    
    test('Mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Cambia la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', {target: {value}});

        expect(wrapper.find('p').text()).toBe(value);
    });
});
