/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaPinterestP,
    FaTwitter,
} from "react-icons/fa";
import Heading from "../global/Heading";
// import IconCom from "../icons/IconCom";
import { Link } from "react-router-dom";

function DoctorCom({ doctor }) {
    const { id, image, name, experience, social } = doctor;
    // console.log(doctor);
    // console.log(`social:- `, social);

    // console.log(id);
    return (
        <>
            <div className="box">
                <img src={`images/doctors/${image}`} alt={`doctor${id}`} />

                <Heading as="h5">{name}</Heading>

                <span>{experience}</span>

                <div className="share">
                    {social.map((soc) => (
                        <Link
                            to={`${soc.link}`}
                            target="_blank"
                            key={soc.id}
                            className={`${!soc.link && "none"}`}
                        >
                            {/* <FaFacebookF /> */}
                            {/* <IconCom name={soc.name} /> */}
                            {soc.name === "facebook" && <FaFacebookF />}

                            {soc.name === "twitter" && <FaTwitter />}

                            {soc.name === "instagram" && <FaInstagram />}

                            {soc.name === "linkedin" && <FaLinkedinIn />}

                            {soc.name === "pinterest" && <FaPinterestP />}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default DoctorCom;
