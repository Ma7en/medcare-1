import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { aboutus as aboutusVar } from "../../utils/vars";
import Heading from "../global/Heading";
import { useAboutUs } from "../../features/aboutus/useAboutUs";
import Spinner from "../spinner/Spinner";
import Picture from "../pictures/Picture";

function AboutCom() {
    const { title, summary } = aboutusVar;
    const { isLoading, aboutus } = useAboutUs();

    // console.log(`a`, aboutus[0].image);

    if (isLoading) return <Spinner />;
    return (
        <>
            <section className="about" id="about">
                <div className="container">
                    <Heading as="h2">
                        <span>about</span>
                        us
                    </Heading>

                    {aboutus.map((about) => (
                        <div className="row" key={about.id}>
                            <Picture
                                src={
                                    about.image.src ||
                                    "images/about/about-img.svg"
                                }
                                alt={about.image.alt}
                                caption={about.image.caption}
                            />

                            <div className="content">
                                <Heading as="h3">
                                    {about.title || title}
                                </Heading>
                                <p>{about.summary || summary}</p>

                                <Link to="/aboutus" className="btn">
                                    <span>learn more</span>
                                    <FaChevronRight />
                                </Link>
                            </div>
                        </div>
                    ))}

                    {/* <div className="row">
                        <div className="image">
                            <img
                                src="images/about/about-img.svg"
                                alt="aboutus image"
                            />
                        </div>

                        <div className="content">
                            <Heading as="h3">{title}</Heading>
                            <p>{summary}</p>

                            <Link to="/aboutus" className="btn">
                                <span>learn more</span>
                                <FaChevronRight />
                            </Link>
                        </div>
                    </div> */}
                </div>
            </section>
            <div className="spikes" />
        </>
    );
}

export default AboutCom;
