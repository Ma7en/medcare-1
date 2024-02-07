/* eslint-disable no-unused-vars */

import StarsRatingView from "../Rating/StarsRatingView";

/* eslint-disable react/prop-types */
function ReviewCom({ review }) {
    const { id, image, name, starrating, description } = review;

    return (
        <>
            <div className="box">
                <img src={image} alt={`review${id}-${name}`} />
                <h3>{name}</h3>
                <div className="stars">
                    <StarsRatingView starrating={starrating} />
                    {/* <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt /> */}
                </div>

                <p className="text">{description}</p>
            </div>
        </>
    );
}

export default ReviewCom;
