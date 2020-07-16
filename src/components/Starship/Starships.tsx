import React from 'react';
import usePostStarshipService from './services/usePostStarshipService';
import { Link } from 'react-router-dom';

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

            <Link to="/">Home</Link>
        </div>
    );
}

export default Starships;