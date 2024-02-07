import styled from "styled-components";
import AppUserAvatar from "./AppUserAvatar";
import AppHeaderMenu from "./AppHeaderMenu";
// import UserAvatar from "../features/authentication/UserAvatar";
// import HeaderMenu from "./AppHeaderMenu";

const StyledHeader = styled.header`
    background-color: var(--color-grey-0);
    padding: 1.2rem 4.8rem;
    border-bottom: 1px solid var(--color-grey-100);
    display: flex;
    gap: 2.4rem;
    align-items: center;
    justify-content: flex-end;
`;

const Appheader = () => {
    return (
        <>
            <StyledHeader>
                <AppUserAvatar />
                <AppHeaderMenu />
            </StyledHeader>
        </>
    );
};

export default Appheader;
