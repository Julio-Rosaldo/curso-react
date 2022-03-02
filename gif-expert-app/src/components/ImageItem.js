import React, { Fragment, useState } from 'react';

export const ImageItem = ({image}) => {
    return (
        <div className="image animate__animated animate__bounce animate">
            <p>{image.title}</p>
            <img src={image.url} alt={image.title}></img>
        </div>
    )
}