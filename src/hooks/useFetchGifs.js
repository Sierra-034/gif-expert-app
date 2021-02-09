import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    const imgSetter = (imgs) => {
        setTimeout(() => {
            setState({
                data: imgs,
                loading: false
            });
        }, 500);
    };

    useEffect(() => {
        getGifs(category)
            .then(imgSetter);
    }, [category]);

    return state;
};
