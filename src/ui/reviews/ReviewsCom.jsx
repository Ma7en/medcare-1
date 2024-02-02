import { FaStar, FaStarHalfAlt } from "react-icons/fa";

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
                        <div className="box">
                            <img src="images/review/pic-1.png" alt="review1" />
                            <h3>john deo</h3>
                            <div className="stars">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                                {/* <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" /> */}
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
                    </div>
                </div>
            </section>
            <div className="spikes" />
        </>
    );
}

export default ReviewsCom;
