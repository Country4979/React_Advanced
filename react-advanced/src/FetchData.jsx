/* eslint-disable react/prop-types */
//Sólo se va aencargar de la lógica, no del renderizado

import { useEffect, useState } from 'react';

function FetchData({ url, children }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((results) => setData(results.data));
    }, [url]);
    return children(data);
}

export default FetchData;
