import { FaChevronRight } from "react-icons/fa";
// import { Link } from "react-router-dom";
import Heading from "../global/Heading";
import { useNavigate } from "react-router-dom";
import Button from "../global/Button";

function Landing() {
    const navigate = useNavigate();
    return (
        <>
            <section className="landing" id="landing">
                <div className="container">
                    <div className="image">
                        <img src="/images/home/home-img.svg" alt="home" />
                    </div>

                    <div className="content">
                        <Heading as="h3">stay safe, stay healthy</Heading>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Rem sed autem vero? Magnam, est laboriosam!
                        </p>

                        {/* <Link to="/book" className="btn">
                            <span>contact us</span>
                            <FaChevronRight />
                        </Link> */}
                        <Button
                            to="/book"
                            // className="btn"
                            onClick={() => navigate("/book")}
                        >
                            <span>contact us</span>
                            {/* <FaChevronRight /> */}
                            <FaChevronRight />
                        </Button>
                    </div>
                </div>
            </section>
            <div className="spikes" />
        </>
    );
}

export default Landing;
