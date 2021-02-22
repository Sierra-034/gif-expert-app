import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas sobre <GifGridItem />', () => {

    const title = 'Un título';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    
    test('Muestra el componente correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Tener un párrafo con el título', () => {
        const p = wrapper.find('p');
        expect(p.text()).toBe(title);
    });

    test('Tener la imagen igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });

    test('Tiene la clase css animate__fadeIn', () => {
        const expectedCssClass = 'animate__fadeIn';
        const div = wrapper.find('div');
        expect(div.hasClass(expectedCssClass)).toBe(true);
    });
});