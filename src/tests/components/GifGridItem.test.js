import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas sobre <GifGridItem />', () => {
    test('Muestra el componente correctamente', () => {
        const wrapper = shallow(<GifGridItem />);
        expect(wrapper).toMatchSnapshot();
    });
});