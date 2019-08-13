import React, {useEffect, useState} from 'react'
import { getCharacters } from '../js/rickandmorty';

const useCharacter = (page) => {
    const [characters, setCharacter] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect (
        () => {
            setLoading(true);
            (async () => {
                try{
                    const {results} = await getCharacters(page)
                    setCharacter([...characters, ...results])
                }catch(e) {}
                setLoading(false)
            })()    
        }, [page]
    );

    return { characters, loading };
}

export default useCharacter;