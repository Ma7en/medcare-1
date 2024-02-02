/* eslint-disable no-unused-vars */
import { FaHeartbeat } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled(Link)`
    &:link,
    &:visited {
        user-select: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;
        font-size: 2.5rem;
        color: var(--black);
        svg {
            color: var(--green);
        }
    }
    /* &:hover,
    &:active,
    &.active:link,
    &.active:visited {} */
`;

function Logo() {
    return (
        <>
            <StyledLogo to="/home" className="logo">
                <FaHeartbeat />
                <span>medcare.</span>
            </StyledLogo>
        </>
    );
}

export default Logo;
