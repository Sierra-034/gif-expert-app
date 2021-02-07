import React, { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);
    
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
        setImages(gifs);
    };

    return (
        <>
        <h3>{ category }</h3>
        <div className="card-grid">
            {images.map(img => (
                <GifGridItem
                    key={img.id}
                    {...img}
                />
            ))}
        </div>
        </>
    );
};