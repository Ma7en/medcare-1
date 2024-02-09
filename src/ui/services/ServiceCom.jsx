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
import { useNavigate } from "react-router-dom";

import Heading from "../global/Heading";
import Button from "../global/Button";

function ServiceCom({ service }) {
    const navigate = useNavigate();

    const { id: serviceId, icon, title, summary } = service;

    return (
        <>
            <div className="box">
                {icon === "FaNotesMedical" && <FaNotesMedical />}
                {icon === "FaAmbulance" && <FaAmbulance />}
                {icon === "FaUserMd" && <FaUserMd />}
                {icon === "FaPills" && <FaPills />}
                {icon === "FaProcedures" && <FaProcedures />}
                {icon === "FaHeartbeat" && <FaHeartbeat />}

                {icon === "" || (icon === undefined && <FaUserMd />)}

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
