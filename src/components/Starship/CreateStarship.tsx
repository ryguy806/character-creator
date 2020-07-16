import React, {useState} from 'react';
import usePostStarshipService, {PostStarship} from './services/usePostStarshipService';

const CreateStarship: React.FC<{}> = () => {
    const initialStarship: PostStarship = {
        name: '',
        crew: '',
        passengers: '',
        cost: '',
    };
    const [starship, setStarship] = useState<PostStarship>(initialStarship);
    const {service, publishStarship} = usePostStarshipService();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        setStarship(prevStarship => ({
            ...prevStarship,
            [event.target.name]: event.target.value,
        }));
    };

    const handleFormSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        publishStarship(starship)
        .then(() => setStarship(initialStarship));
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <p>Name: </p>
                <input 
                    type="text"
                    name="name"
                    value={starship.name}
                    onChange={handleChange}
                />
                <p>Crew: </p>
                <input 
                    type="text"
                    name="crew"
                    value={starship.crew}
                    onChange={handleChange}
                />
                <p>Passengers:</p>
                <input 
                    type="text"
                    name="passengers"
                    value={starship.passengers}
                    onChange={handleChange}
                />
                <p>Cost:</p>
                <input 
                    type="text"
                    name="cost"
                    value={starship.cost}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
            {service.status === 'loading' && <div>Sending...</div>}
            {service.status === 'loaded' && <div>Starship submitted</div>}
            {service.status === 'error' && <div>Error message</div>}
        </div>
    );
}

export default CreateStarship;