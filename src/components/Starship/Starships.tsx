import React from 'react';
import usePostStarshipService from './services/usePostStarshipService';
import { disableYellowBox } from 'console';

const Starships: React.FC<{}> = () => {
    const service = usePostStarshipService()

    return (
        <div>
            {service.status === 'loading' && <div>Loading...</div>}
            {service.status === 'loaded' && 
                service.payload.results.map(starship =>
                    <div key={starship.url}>{starship.name}</div>
            )}
            {service.status === 'error' && (
                <div>Error, the backend moved to the dark side.</div>
            )}
        </div>
    );
}

export default Starships;