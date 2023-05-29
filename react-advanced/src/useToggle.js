import { useCallback, useState } from 'react';

//Se encargará de gestionar un estado booleano
function useToggle(initialValue) {
    const [value, setvalue] = useState(initialValue);

    const toggleOn = useCallback(() => setvalue(true), []) 
    const toggleOff = useCallback(() => setvalue(false), [])
    const toggle = useCallback(() => setvalue((v) => !v), []);

    return { value, toggleOff, toggleOn, toggle };
}

export default useToggle;
