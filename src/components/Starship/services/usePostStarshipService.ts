import {useEffect, useState} from 'react';
import {Service} from './StartshipService';
import {IStarship} from '../Starship';

export interface IStarships {
    results: IStarship[];
}

const usePostStarshipService = () => {
    const [result, setResult] = useState<Service<IStarships>>({
        status: 'loading'
    });

    useEffect(() => {
        fetch('https://swapi.co/api/starships')
            .then(response => response.json())
            .then(response => setResult({status: 'loaded', payload: response}))
            .catch(error => ({status: 'error', error}));
    }, []);

    return result;
};

export default usePostStarshipService;