import React, {useState} from 'react'
import PropTypes from 'prop-types'

import CharacterProfile from './CharacterProfile';
import Card from './card'
import Loader from './loader'

import useCharacter from '../hooks/useCharacter'

import '../css/board.css'

const Board = ({page, scrollHandler, boardRef}) => {
    const { characters, loading } = useCharacter(page)
    scrollHandler(characters.length)
    

    return (
        <div className="container" ref={boardRef}>
            <div className="board">
                {
                    characters.map((character) => (
                        <Card key={character.id}  >
                            <CharacterProfile
                                title={character.name}
                                status={character.status}
                                image = {character.image}
                                character = {character}                        
                            />
                        </Card>
                    ))
                }
            </div>
            { loading &&  <Loader loaderClass="margin-auto-xl" /> }
        </div>
    )
}

Board.propTypes = {
    page: PropTypes.number,
    scrollHandler: PropTypes.func,
    boardRef: PropTypes.any
}

export default Board