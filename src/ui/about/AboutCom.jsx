import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// import { useNavigate } from "react-router-dom";

function AboutCom() {
    // const navigate = useNavigate();
    return (
        <>
            <section className="about" id="about">
                <div className="container">
                    <h1 className="heading">
                        <span>about</span>
                        us
                    </h1>

                    <div className="row">
                        <div className="image">
                            <img
                                src="images/about/about-img.svg"
                                alt="about img"
                            />
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

                            {/* <button
                                className="btn"
                                onClick={() => navigate("/aboutus")}
                            >
                                about
                            </button> */}

                            <Link to="/aboutus" className="btn">
                                <span>learn more</span>
                                <FaChevronRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <div className="spikes" />
        </>
    );
}

export default AboutCom;
