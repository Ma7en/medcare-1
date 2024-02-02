/* eslint-disable no-unused-vars */
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaPinterestP,
} from "react-icons/fa";
import Heading from "../global/Heading";
import { doctors } from "../../utils/vars";
import DoctorCom from "./DoctorCom";

function DoctorsCom() {
    console.log(doctors);
    return (
        <>
            <section className="doctors" id="doctors">
                <div className="container">
                    <Heading as="h2">
                        our
                        <span>doctors</span>
                    </Heading>

                    <div className="box-container">
                        {doctors.map((doctor) => (
                            <DoctorCom doctor={doctor} key={doctor.id} />
                        ))}

                        {/* <div className="box">
                            <img src="images/doctors/doc-1.jpg" alt="doctor1" />
                            <h3>john deo</h3>
                            <span>expert doctor</span>
                            <div className="share">
                                <a href="#">
                                    <FaFacebookF />
                                </a>
                                <a href="#">
                                    <FaTwitter />
                                </a>
                                <a href="#">
                                    <FaInstagram />
                                </a>
                                <a href="#">
                                    <FaLinkedinIn />
                                </a>

                                
                            </div>
                        </div> */}

                        {/* 
                        <div className="box">
                            <img src="images/doctors/doc-2.jpg" alt="doctor2" />
                            <h3>john deo</h3>
                            <span>expert doctor</span>
                            <div className="share">
                                <a href="#">
                                    <FaFacebookF />
                                </a>
                                <a href="#">
                                    <FaTwitter />
                                </a>
                                <a href="#">
                                    <FaInstagram />
                                </a>
                                <a href="#">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>

                        <div className="box">
                            <img src="images/doctors/doc-3.jpg" alt="doctor3" />
                            <h3>john deo</h3>
                            <span>expert doctor</span>
                            <div className="share">
                                <a href="#">
                                    <FaFacebookF />
                                </a>
                                <a href="#">
                                    <FaTwitter />
                                </a>
                                <a href="#">
                                    <FaInstagram />
                                </a>
                                <a href="#">
                                    <FaLinkedinIn />
                                </a>
 
                            </div>
                        </div>

                        <div className="box">
                            <img src="images/doctors/doc-4.jpg" alt="doctor4" />
                            <h3>john deo</h3>
                            <span>expert doctor</span>
                            <div className="share">
                                <a href="#">
                                    <FaFacebookF />
                                </a>
                                <a href="#">
                                    <FaTwitter />
                                </a>
                                <a href="#">
                                    <FaInstagram />
                                </a>
                                <a href="#">
                                    <FaLinkedinIn />
                                </a>

                                 
                            </div>
                        </div>

                        <div className="box">
                            <img src="images/doctors/doc-5.jpg" alt="doctor5" />
                            <h3>john deo</h3>
                            <span>expert doctor</span>
                            <div className="share">
                                <a href="#">
                                    <FaFacebookF />
                                </a>
                                <a href="#">
                                    <FaTwitter />
                                </a>
                                <a href="#">
                                    <FaInstagram />
                                </a>
                                <a href="#">
                                    <FaLinkedinIn />
                                </a>

                                
                            </div>
                        </div>

                        <div className="box">
                            <img src="images/doctors/doc-6.jpg" alt="doctor6" />
                            <h3>john deo</h3>
                            <span>expert doctor</span>
                            <div className="share">
                                <a href="#">
                                    <FaFacebookF />
                                </a>
                                <a href="#">
                                    <FaTwitter />
                                </a>
                                <a href="#">
                                    <FaInstagram />
                                </a>
                                <a href="#">
                                    <FaLinkedinIn />
                                </a>

                                
                            </div>
                        </div> 
                        */}
                    </div>
                </div>
            </section>
            <div className="spikes" />
        </>
    );
}

export default DoctorsCom;
