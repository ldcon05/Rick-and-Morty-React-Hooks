import React from 'react'
import PropTypes from 'prop-types'

import '../css/card.css'

const Card = ({ children }) => (
    <div className="card">
        { children }
    </div>
)

Card.propTypes = {
    children: PropTypes.node
}

export default Card