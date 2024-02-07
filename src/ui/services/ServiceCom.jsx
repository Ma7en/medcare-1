/* eslint-disable react/prop-types */

import {
    FaAmbulance,
    FaChevronRight,
    FaHeartbeat,
    FaNotesMedical,
    FaPills,
    FaProcedures,
    FaUserMd,
} from "react-icons/fa";
import Heading from "../global/Heading";
import Button from "../global/Button";
import { useNavigate } from "react-router-dom";

function ServiceCom({ service }) {
    const navigate = useNavigate();
    const { id: serviceId, icon, title, summary } = service;
    // console.log(icon, image);

    return (
        <>
            <div className="box">
                {icon === "FaNotesMedical" && <FaNotesMedical />}
                {icon === "FaAmbulance" && <FaAmbulance />}
                {icon === "FaUserMd" && <FaUserMd />}
                {icon === "FaPills" && <FaPills />}
                {icon === "FaProcedures" && <FaProcedures />}
                {icon === "FaHeartbeat" && <FaHeartbeat />}

                <Heading as="h5">{title}</Heading>
                <p>{summary}</p>
                <Button onClick={() => navigate(`/services/${serviceId}`)}>
                    <span>learn more</span>
                    <FaChevronRight />
                </Button>
            </div>
        </>
    );
}

export default ServiceCom;
