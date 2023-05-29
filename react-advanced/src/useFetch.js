import { useEffect, useState } from 'react';
import useToggle from './useToggle';

function useFetch({ url, initialState }) {
    const {value: isLoading, toggleOn: isLoadingOn, toggleOff: isLoadingOff} = useToggle(false)
    //const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(initialState);
    const [error, setError] = useState(null);

    useEffect(() => {
        setError(null);
        isLoadingOn();
        fetch(url)
            .then((response) => response.json())
            .then((results) => setData(results.data))
            .catch((error) => setError(error))
            .finally(() => isLoadingOff());
    }, [url, isLoadingOff, isLoadingOn]);

    return { data, isLoading, error };
}

export default useFetch;
