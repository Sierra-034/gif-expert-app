import React, { useState } from "react";

const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch', 'Samurai X', 'Dragon ball']);

    const handleAdd = () => {
        setCategories( prevState => [ ...prevState, 'Scooby Doo' ] );
    };

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <button onClick={ handleAdd }>Agregar</button>
            <ol>
                { categories.map(category => {
                    return <li key={ category }>{ category }</li>
                }) }
            </ol>
        </>
    );
};

export default GifExpertApp;