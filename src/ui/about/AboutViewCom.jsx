import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutViewCom() {
    return (
        <>
            <div className="aboutviewcom">
                <div className="container">
                    <section>
                        <div className="video">
                            <video controls>
                                <source
                                    src="/vidoes/neurorons.mp4"
                                    type="video/mp4"
                                />
                            </video>
                        </div>

                        <div className="content">
                            <h3>we take care of your healthy life</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Iure ducimus, quod ex
                                cupiditate ullam in assumenda maiores et culpa
                                odit tempora ipsam qui, quisquam quis facere
                                iste fuga, minus nesciunt.
                            </p>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Natus vero ipsam laborum porro
                                voluptates voluptatibus a nihil temporibus
                                deserunt vel?
                            </p>

                            <Link to="/book" className="btn">
                                <span>book new</span>
                                <FaChevronRight />
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default AboutViewCom;
