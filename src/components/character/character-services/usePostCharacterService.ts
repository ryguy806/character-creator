import {useState} from 'react';
import {Service} from '../character-types/Service';
import {Character} from '../character-types/Character';

export type PostCharacter = Pick<
    Character,
    'playerName' | 'characterName' | 'race' | 'class' | 'background'
>;

const usePostCharacterService = () => {
    const [service, setService] = useState<Service<PostCharacter>>({
        status: 'init',
    });

    const publishCharacter = (character: PostCharacter) => {
        setService({status: 'loading'})

        const headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');

        return new Promise((resolve, reject) => {
            fetch('https://www.dnd5eapi.co/', {
                method: 'POST',
                body: JSON.stringify(character),
                headers
            })
            .then(response => response.json())
            .then(response => {
                setService({status: 'loaded', payload: response});
                resolve(response);
            })
            .catch(error => {
                setService({status: 'error', error});
                reject(error);
            });
        });
    };

    return {
        service,
        publishCharacter
    };
};

export default usePostCharacterService; 
