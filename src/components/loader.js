import React from 'react'
import PropTypes from 'prop-types'

import '../assets/css/loader.css'

const Loader = ({ loaderClass = "" }) => {
    const groupClass = `loader ${loaderClass}`    

    return <div className={ groupClass }></div>
}

Loader.propTypes = {
    loaderClass: PropTypes.string
}

export default Loader