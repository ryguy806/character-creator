import {useState, useEffect} from 'react';
import {Service} from './StartshipService';
import {IStarship} from '../Starship';

const useStarshipByUrlService = (url: string) => {
    const [result, setResult] = useState<Service<IStarship>>({
        status: 'loading',
    });

    useEffect(() => {
        if(url) {
            setResult({status: "loading"});
            fetch(url)
            .then(response => response.json())
            .then(response => setResult({status:'loaded', payload: response}))
            .catch(error => setResult({status: 'error', error}));
        }
    }, [url]);

    return result;
}

export default useStarshipByUrlService;
