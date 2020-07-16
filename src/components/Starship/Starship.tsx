import React from 'react';
import useStarshipByUrlService from './services/UseStarshipServiceByUrl';

export interface IStarship {
    name: string;
    crew: string;
    passengers: string;
    cost?: string;
    url: string;
}

export interface Props {
    url: string;
}

const Starship: React.FC<Props> = ({url}) => {
    const service = useStarshipByUrlService(url);

    return (
        <div>
            {service.status === 'loading' && <div>Loading...</div>}
            {service.status === 'loaded' && (
                <div>
                    <h2>{service.payload.name}</h2>
                    <h3>{service.payload.crew}</h3>
                    <h3>{service.payload.passengers}</h3>
                    <h3>{service.payload.cost}</h3>
                </div>
            )}
            {service.status === 'error' && <div>{service.error}</div>}
        </div>
    );
}

export default Starship;