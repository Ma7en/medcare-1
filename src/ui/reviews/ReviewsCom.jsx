/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import StarRating from "../Rating/StarRating";
import Star from "../Rating/Star";
import { reviews } from "../../utils/vars";
import ReviewCom from "./ReviewCom";

/* eslint-disable react/no-unescaped-entities */
function ReviewsCom() {
    // const s = [3];
    // // console.log(s);
    // console.log(s * s);

    return (
        <>
            <section className="review" id="review">
                <div className="container">
                    <h1 className="heading">
                        client's
                        <span>review</span>
                    </h1>

                    <div className="box-container">
                        {reviews.map((review) => (
                            <ReviewCom review={review} key={review.id} />
                        ))}

                        {/* 
                        <div className="box">
                            <img src="images/review/pic-1.png" alt="review1" />
                            <h3>john deo</h3>
                            <div className="stars">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </div>

                            <p className="text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laboriosam sapiente nihil
                                aperiam? Repellat sequi nisi aliquid
                                perspiciatis libero nobis rem numquam nesciunt
                                alias sapiente minus voluptatem, reiciendis
                                consequuntur optio dolorem!
                            </p>
                        </div>

                        <div className="box">
                            <img src="images/review/pic-2.png" alt="review2" />
                            <h3>john deo</h3>
                            <div className="stars">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </div>
                            <p className="text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laboriosam sapiente nihil
                                aperiam? Repellat sequi nisi aliquid
                                perspiciatis libero nobis rem numquam nesciunt
                                alias sapiente minus voluptatem, reiciendis
                                consequuntur optio dolorem!
                            </p>
                        </div>

                        <div className="box">
                            <img src="images/review/pic-3.png" alt="review3" />
                            <h3>john deo</h3>
                            <div className="stars">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </div>
                            <p className="text">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laboriosam sapiente nihil
                                aperiam? Repellat sequi nisi aliquid
                                perspiciatis libero nobis rem numquam nesciunt
                                alias sapiente minus voluptatem, reiciendis
                                consequuntur optio dolorem!
                            </p>
                        </div> 
                        */}
                    </div>
                </div>
            </section>
            <div className="spikes" />
        </>
    );
}

export default ReviewsCom;
