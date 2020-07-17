import {useEffect, useState} from 'react';
import {Service} from '../character-types/Service';
import {Character} from '../character-types/Character';

const useCharacterServiceByUrl = (url: string) => {
    const [result, setResult] = useState<Service<Character>>({
        status: 'loading',
    });

    useEffect(() => {
        if(url) {
            setResult({status: "loading"});
            fetch(url)
                .then(response => response.json())
                .then(response => setResult({status: "loaded", payload: response}))
                .catch(error => setResult({status: "error", error}));
        }
    }, [url]);

    return result;
};

export default useCharacterServiceByUrl;