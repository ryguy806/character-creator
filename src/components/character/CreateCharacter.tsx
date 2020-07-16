import React, {useState} from 'react';
import usePostCharacterService, { PostCharacter } from './character-services/usePostCharacterService';


const CreateCharacter: React.FC<{}> =() => {
    const initialCharacter: PostCharacter = {
        playerName: '',
        characterName: '',
        race: '',
        class: '',
        background: '',
    };

    const [character, setCharacter] = useState<PostCharacter>(initialCharacter);
    const {service, publishCharacter} = usePostCharacterService();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        setCharacter(previousCharacter => ({
            ...previousCharacter,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        publishCharacter(character)
        .then(() => setCharacter(initialCharacter));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Player Name: </p>
                <input type="text"
                    name="player-name"
                    value={character.playerName}
                    onChange={handleChange}    
                />
                <p>Character Name: </p>
                <input type="text"
                    name="character-name"
                    value={character.characterName}
                    onChange={handleChange}    
                />
                <p>Racce: </p>
                <input type="text"
                    name="race"
                    value={character.race}
                    onChange={handleChange}    
                />
                <p>Class: </p>
                <input type="text"
                    name="class"
                    value={character.class}
                    onChange={handleChange}    
                />
                <p>Background: </p>
                <input type="text"
                    name="background"
                    value={character.background}
                    onChange={handleChange}    
                />
            </form>
        </div>
    );
};