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

    /**
     * 1. Simular el inputChange
     * 2. Simular el submit
     * 3. setCategories debe haber sido llamado
     * 4. El valor del input debe ser ''
     */
    test('Llama al setCategories y limpia la caja de texto', () => {
        const value = 'sierra-034';

        // Simular más de un evento requiere que sea sobre la misma instancia
        wrapper.find('input').simulate('change', {target: {value}});
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(wrapper.find('input').prop('value')).toBe('');
    });
});
