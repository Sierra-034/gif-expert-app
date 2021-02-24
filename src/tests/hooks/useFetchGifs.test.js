import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Custom hook useFetchGifs', () => {
    test('Verifica el estado inicial', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Halo'));
        const {data, loading} = result.current;

        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Retorna un arreglo de imgs y loading en false', async () => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('Halo'));
        await waitForNextUpdate();

        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });
});
