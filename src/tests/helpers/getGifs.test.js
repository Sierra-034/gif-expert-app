import { getGifs } from "../../helpers/getGifs";

describe('Pruebas con getGifs Fetch', () => {
    test('Traer 10 elementos', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
    })

    test('Cero elementos', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
});