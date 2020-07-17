import {useEffect, useState} from 'react';
import {Service} from '../character-types/Service';
import {Character} from '../character-types/Character';

export interface Characters {
    results: Character[];
}

const useCharacterService = () => {
    const [result, setResult] = useState<Service<Characters>>({
        status: "loading",
    });

    useEffect(() => {
        fetch('https://www.dnd5eapi.co/api/')
        .then(response => response.json())
        .then(response => setResult({ status: 'loaded', payload: response }))
        .catch(error => setResult({ status: 'error', error }));
    }, []);

    return result;
};

export default useCharacterService;