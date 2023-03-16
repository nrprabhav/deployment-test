import React from 'react'
import PropTypes from 'prop-types'

const Character = ({ realm, name, imgUrl, race }) => {
    return (
        <div data-test='character-card' className="card-container">
            <img data-test='character-image' src={imgUrl} alt={name} />
            <div data-test='character-body' className="card-body">
                <h1 data-test='character-content'>{name} ({race})</h1>
            </div>
        </div>
    );
};

Character.propTypes = {
    family: PropTypes.string,
    fullName: PropTypes.string,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
}

export default Character;