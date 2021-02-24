import { shallow } from 'enzyme';
import GifExpertApp from "../GifExpertApp";

describe('Pruebas sobre <GifExpertApp />', () => {
    test('Coincide con el snapshot', () => {
        const wrapper = shallow(<GifExpertApp />)
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar una lista de categorías', () => {
        const categories = ['halo', 'veritasium'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
});
