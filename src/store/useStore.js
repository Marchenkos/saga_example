import { useEffect, useRef, useState } from 'react';

import { createStore } from './store';

export const useStore = () => {
    const [, setIsReady] = useState(false);
    const store = useRef();

    useEffect(() => {
        (async () => {
            store.current = await createStore();

            setIsReady(true);
        })();
    }, []);

    return store.current;
};
