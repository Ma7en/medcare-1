import Footer from "../footer/Footer";
import Header from "../header/Header";
import LinksCom from "../links/LinksCom";
import AdminComView from "./AdminComView";

function Admin() {
    return (
        <>
            <Header />
            <AdminComView />
            <LinksCom />
            <Footer />
        </>
    );
}

export default Admin;
