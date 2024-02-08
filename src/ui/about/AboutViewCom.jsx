/* eslint-disable no-unused-vars */
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import Heading from "../global/Heading";
import Spinner from "../spinner/Spinner";
import Video from "../videos/Video";
import Picture from "../pictures/Picture";

import { aboutus as aboutusVar } from "../../utils/vars";
import { useAboutUs } from "../../features/aboutus/useAboutUs";

function AboutViewCom() {
    const { id, image, video, title, summary, description } = aboutusVar;
    const { isLoading, aboutus } = useAboutUs();

    // console.log(`img==>`, image);

    if (isLoading) return <Spinner />;
    return (
        <>
            <div className="aboutviewcom">
                <div className="container">
                    {aboutus.map((about) => (
                        <section key={about.id}>
                            {about.video ? (
                                <Video
                                    // src={`${about.video.src || about.video.url || "/vidoes/neurorons.mp4" || video}`}
                                    src={`${"/vidoes/neurorons.mp4" || video}`}
                                />
                            ) : (
                                <Picture
                                    src={
                                        about.image.src ||
                                        about.image.url ||
                                        "images/about/about-img.svg"
                                    }
                                    alt={about.image.alt}
                                    caption={about.image.caption}
                                />
                            )}

                            <div className="content">
                                <Heading as="h3">{about.title}</Heading>

                                <p>{about.summary}</p>

                                <div className="list">
                                    <ul>
                                        {/* {about.description.map((dis) => (
                                            <li key={dis.id}>{dis.line}</li>
                                        ))} */}
                                        {Object.keys(about.description).map(
                                            (des) => (
                                                <li key={des}>
                                                    {about.description[des]}
                                                </li>
                                            ),
                                        )}
                                        {/* {Object.keys(description).forEach(
                                            (des) => {
                                                // setValue(`description.${des}`, description[des])
                                                <li key={des}>
                                                    {description[des]}dddd
                                                </li>;
                                            },
                                        )} */}
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
