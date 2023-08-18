import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debounce, setDebounce] = useState(value);
    useEffect(() => {
        if (!value.trim()) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            delay = 0;
        }
        const handleTimeOut = setTimeout(() => {
            setDebounce(value);
        }, delay);

        return () => clearTimeout(handleTimeOut);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return debounce;
}
export default useDebounce;
