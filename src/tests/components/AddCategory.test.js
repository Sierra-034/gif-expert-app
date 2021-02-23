import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);
    
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });
    
    test('Mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Cambia la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', {target: {value}});

        expect(wrapper.find('p').text()).toBe(value);
    });

    test('No debe postear la información onSubmit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    });
});
