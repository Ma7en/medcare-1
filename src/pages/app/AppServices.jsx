/* eslint-disable no-unused-vars */

import BlogTableOperations from "../../features/blogs/BlogTableOperations";
import AddService from "../../features/services/AddService";
import ServiceTable from "../../features/services/ServiceTable";
import ServiceTableOperations from "../../features/services/ServiceTableOperations";
import Heading from "../../ui/global/Heading";
import Row from "../../ui/global/Row";

function AppServices() {
    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">All Services</Heading>
                <ServiceTableOperations />
            </Row>

            <Row>
                <ServiceTable />

                <AddService />
            </Row>
        </>
    );
}

export default AppServices;

{
    // import { getCabins } from "../services/apiCabins";
    // import { useEffect } from "react";
    // useEffect(function () {
    //     getCabins().then((data) => console.log(data));
    // }, []);
    /* <img
        // src="https://dclaevazetcjjkrzczpc.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"
        src="https://qxnddsjybxitlfnsokfe.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"
        alt=""
    /> */
}
