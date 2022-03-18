import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

export const ImageItem = ({image}) => {
    return (
        <div className="image animate__animated animate__bounce animate">
            <p>{image.title}</p>
            <img src={image.url} alt={image.title}></img>
        </div>
    )
}

ImageItem.propTypes = {
    image: PropTypes.object.isRequired
}