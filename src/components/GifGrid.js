import React, { useState, useEffect } from "react";

export const GifGrid = ({ category }) => {
    
    const [count, setCount] = useState(0);
    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async () => {
        const URL = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&limit=10&api_key=4N0WEqRJUE4MR2NNALGC8qIYVvuNUXwM';
        const response = await fetch(URL);
        const {data} = await response.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        
        console.log(gifs);
    };

    return (
        <div>
            <h3>{ category }</h3>
            <h3>{ count }</h3>
            <button onClick={() => setCount(count + 1)}>button</button>
        </div>
    );
};