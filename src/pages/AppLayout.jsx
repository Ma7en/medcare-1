// import styles from "./AppLayout.module.css";

import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Appheader from "../ui/appheader/Appheader";
import AppSidebar from "../ui/appsidebar/AppSidebar";
import { useEffect } from "react";
import { AppMenuProvider } from "../contexts/AppMenuContext";

// import Main from "../ui/global/Main";

// import styled from "styled-components";

// const StyledAppLayout = styled.div`
//     height: 100vh;
//     padding: 2.4rem;
//     overscroll-behavior-y: none;
//     display: flex;
//     position: relative;
// `;

const StyledAppLayout = styled.div`
    display: grid;
    grid-template-columns: 26rem 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
    position: relative;
    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

const Main = styled.main`
    background-color: var(--color-grey-50);
    padding: 4rem 4.8rem 6.4rem;
    overflow: auto;
`;

const Container = styled.div`
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`;

const AppLayout = () => {
    useEffect(() => {
        // قم بتحديد padding للـ body عند دخول الصفحة
        document.body.style.padding = "0"; // أو أي قيمة تريدها

        // يجب إعادة تحديد ال padding للـ body عند مغادرة الصفحة
        return () => {
            document.body.style.padding = ""; // استعادة ال padding الأصلي
        };
    }, []);

    return (
        <>
            <AppMenuProvider>
                <StyledAppLayout className="">
                    <Appheader />

                    <AppSidebar />

                    <Main className="AppMain">
                        <Container>
                            <Outlet />
                        </Container>
                    </Main>
                </StyledAppLayout>
            </AppMenuProvider>
        </>
    );
};

export default AppLayout;
