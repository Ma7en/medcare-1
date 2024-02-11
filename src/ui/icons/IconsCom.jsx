/* eslint-disable no-unused-vars */
import { FaHospital, FaProcedures, FaUserMd, FaUsers } from "react-icons/fa";

function IconsCom() {
    // dataupdate, icon, number, title, username, emil, user_Id
    return (
        <>
            <section className="icons">
                <div className="container">
                    <div className="icon-cont">
                        <FaUserMd />
                        <h3>140+</h3>
                        <p>doctors at work</p>
                    </div>

                    {/* <div className="icon-cont"> 
                        <FaUserMd />
                        <h3>140+</h3>
                        <p>doctors at work</p>
                    </div>

                    <div className="icon-cont"> 
                        <FaUsers />
                        <h3>1040+</h3>
                        <p>satisfied patients</p>
                    </div>

                    <div className="icon-cont"> 
                        <FaProcedures />
                        <h3>500+</h3>
                        <p>bed facility</p>
                    </div>

                    <div className="icon-cont"> 
                        <FaHospital />
                        <h3>80+</h3>
                        <p>available hospitals</p>
                    </div> */}
                </div>
            </section>
            <div className="spikes" />
        </>
    );
}

export default IconsCom;
