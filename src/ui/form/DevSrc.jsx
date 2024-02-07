/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledDevSrc = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    label {
        font-size: 1.4rem;
        font-weight: 400;
    }
`;

function DevSrc({ children }) {
    return (
        <>
            <StyledDevSrc>{children}</StyledDevSrc>
        </>
    );
}

export default DevSrc;
