import React from 'react';
import { Link } from 'react-router-dom';

export default function LatestGame({ _id, title, imageUrl }) {
    return (
        <div className="game">
            <div className="image-wrap">
                <img src={imageUrl} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="data-buttons">
                <Link to={`/games/${_id}/details`} className="btn details-btn">Details</Link>
            </div>
        </div>
    );
}
