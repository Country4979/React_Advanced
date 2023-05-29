import { useEffect, useState } from 'react';

function useFetch({url, initialState}) {
    const [data, setData] = useState(initialState);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((results) => setData(results.data));
    }, [url]);
    return data;
}

export default useFetch;
