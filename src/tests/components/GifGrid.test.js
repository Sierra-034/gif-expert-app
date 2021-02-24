import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas sobre <GifGrid />', () => {

    const category = 'Halo';
    
    test('Coincide con el snapshot', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Muestra los items cuando se cargan imágenes con useFetchGifs', () => {
        const imgData = [
            {
                id: 'image_id',
                title: 'img_title',
                url: 'http://localhost/some/img.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            data: imgData,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });
});
