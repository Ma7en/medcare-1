import {
    FaChevronRight,
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaPinterestP,
    FaTwitter,
    FaWhatsapp,
} from "react-icons/fa";
import Logo from "../header/Logo";

function LinksCom() {
    return (
        <>
            <section className="links">
                <div className="container">
                    <div className="brand">
                        <Logo />

                        <p className="slogan">
                            {/* Movies &amp; TV Shows, Online cinema,  */}
                            Medcare. hospital database ReactJS Template.
                        </p>

                        <div className="social">
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
                            <a href="#">
                                <FaPinterestP />
                            </a>
                        </div>
                    </div>

                    <div className="boxs">
                        <div className="box">
                            <h3>quick links</h3>

                            <a href="#home">
                                <FaChevronRight />
                                <span>home</span>
                            </a>

                            <a href="#services">
                                <FaChevronRight />
                                <span>services</span>
                            </a>

                            <a href="#about">
                                <FaChevronRight />
                                <span>about</span>
                            </a>

                            <a href="#doctors">
                                <FaChevronRight />
                                <span>doctors</span>
                            </a>

                            <a href="#book">
                                <FaChevronRight />
                                <span>book</span>
                            </a>

                            <a href="#review">
                                <FaChevronRight />
                                <span>review</span>
                            </a>

                            <a href="#blogs">
                                <FaChevronRight />
                                <span>blogs</span>
                            </a>
                        </div>

                        <div className="box">
                            <h3>our services</h3>

                            <a href="#">
                                <FaChevronRight />
                                <span>dental care</span>
                            </a>

                            <a href="#">
                                <FaChevronRight />
                                <span>message therapy</span>
                            </a>

                            <a href="#">
                                <FaChevronRight />
                                <span>cardioloty</span>
                            </a>

                            <a href="#">
                                <FaChevronRight />
                                <span>diagnosis</span>
                            </a>

                            <a href="#">
                                <FaChevronRight />
                                <span>ambulance service</span>
                            </a>
                        </div>

                        <div className="box">
                            <h3>contact info</h3>

                            <a href="#">
                                <FaPhoneAlt />
                                <span>+123-456-7890</span>
                            </a>

                            <a href="#">
                                <FaWhatsapp />
                                <span>+111-222-3333</span>
                            </a>

                            <a href="#">
                                <FaEnvelope />
                                <span>shaikhanas@gmail.com</span>
                            </a>

                            <a href="#">
                                <FaEnvelope />
                                <span>anasbhai@gmail.com</span>
                            </a>

                            <a href="#">
                                <FaMapMarkerAlt />
                                <span>mumbai, india - 400104</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LinksCom;
