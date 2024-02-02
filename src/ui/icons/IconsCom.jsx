import { FaHospital, FaProcedures, FaUserMd, FaUsers } from "react-icons/fa";

function IconsCom() {
    return (
        <>
            <section className="icons">
                <div className="container">
                    <div className="icon-cont">
                        {/* <i className="fas fa-user-md" /> */}
                        <FaUserMd />
                        <h3>140+</h3>
                        <p>doctors at work</p>
                    </div>

                    <div className="icon-cont">
                        {/* <i className="fas fa-users" /> */}
                        <FaUsers />
                        <h3>1040+</h3>
                        <p>satisfied patients</p>
                    </div>

                    <div className="icon-cont">
                        {/* <i className="fas fa-procedures" /> */}
                        <FaProcedures />
                        <h3>500+</h3>
                        <p>bed facility</p>
                    </div>

                    <div className="icon-cont">
                        {/* <i className="fas fa-hospital" /> */}
                        <FaHospital />
                        <h3>80+</h3>
                        <p>available hospitals</p>
                    </div>
                </div>
            </section>
            <div className="spikes" />
        </>
    );
}

export default IconsCom;
