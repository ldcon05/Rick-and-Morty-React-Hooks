import React from 'react'
import PropTypes from 'prop-types'

import getDate from '../helpers/formatDate'

import '../css/CharacterProfile.css'

const CharacterProfile = ({title, status, image, character }) => {
    const statusClassType = `${status} margin-top-sm`
    const { species, gender, created, origin } = character
    
    return (
        <div>
            <img
                className="img-responsive"
                src={ image } 
                alt={ title }
            />
            <div className="content">
                <h2>{ title }</h2>
                <p className={ statusClassType } >{ status }</p>
                <div className="information margin-top-lg">
                    <h4>Created:</h4>
                    <p>{ getDate(created) }</p>
                    <h4>Origin:</h4>
                    <p>{ origin.name }</p>
                    <h4>Species:</h4>
                    <p>{ species }</p>
                    <h4>Gender:</h4>
                    <p>{ gender }</p>
                </div>
            </div>
        </div>
    )
}

CharacterProfile.propTypes = {
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    character: PropTypes.object
};

export default CharacterProfile;