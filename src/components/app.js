import React, {useState, useRef, useEffect} from 'react';
import Board from './board'
import useScrollY from '../hooks/useScroll'
import usePagination from '../hooks/usePagination'

const App = () => {
    const [listLength, setListLength] = useState(0);
    const rickAndMortyBoardRef = useRef(null);
    const scrollY = useScrollY();
    const page = usePagination(rickAndMortyBoardRef.current, scrollY, listLength)
    const updateListLength = (value) => setListLength(value) 

    return (
        <div>
            <h1 className="title"> Rick And Morty Characters </h1>
            <Board 
                page={ page }
                boardRef={ rickAndMortyBoardRef }
                scrollHandler={updateListLength}

            />
        </div>
    )
}
export default App
