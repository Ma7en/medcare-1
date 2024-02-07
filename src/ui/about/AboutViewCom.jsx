/* eslint-disable no-unused-vars */
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { aboutus as aboutusVar } from "../../utils/vars";
import Heading from "../global/Heading";
import { useAboutUs } from "../../features/aboutus/useAboutUs";
import Spinner from "../spinner/Spinner";
import Video from "../videos/Video";

function AboutViewCom() {
    const { id, image, video, title, summary, description } = aboutusVar;

    const { isLoading, aboutus } = useAboutUs();

    if (isLoading) return <Spinner />;
    return (
        <>
            <div className="aboutviewcom">
                <div className="container">
                    {aboutus.map((about) => (
                        <section key={about.id}>
                            {about.video ? (
                                <div className="video">
                                    <Video
                                        src={`${about.video || "/vidoes/neurorons.mp4" || video}`}
                                    />
                                </div>
                            ) : (
                                <div>
                                    <img
                                        src={`${about.image}`}
                                        alt={`${about.title}-${about.id}`}
                                    />
                                </div>
                            )}

                            <div className="content">
                                <Heading as="h3">{about.title}</Heading>
                                <p>{about.summary}</p>

                                <div className="list">
                                    <ul>
                                        {about.description.map((dis) => (
                                            <li key={dis.id}>{dis.line}</li>
                                        ))}
                                    </ul>
                                </div>

                                <Link to="/book" className="btn">
                                    <span>book new</span>
                                    <FaChevronRight />
                                </Link>
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </>
    );
}

export default AboutViewCom;
