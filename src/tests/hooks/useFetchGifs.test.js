import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Custom hook useFetchGifs', () => {
    test('Verifica el estado inicial', () => {
        const {result} = renderHook(() => useFetchGifs('Halo'));
        const {data, loading} = result.current;

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });
});
