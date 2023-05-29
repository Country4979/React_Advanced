import { useEffect, useState } from 'react';

function useFetch({ url, initialState }) {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(initialState);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        setIsLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((results) => setData(results.data))
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false));
    }, [url]);

    return { data, isLoading, error };
}

export default useFetch;
