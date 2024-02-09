/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Heading from "../global/Heading";
import BackButton from "../global/BackButton";
import Button from "../global/Button";

const StyledBtns = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;

function Empty({ resourceName }) {
    const navigate = useNavigate();

    return (
        <>
            <div className="notfound">
                <div className="container">
                    <section>
                        <div>
                            <Heading as="h3">
                                No {resourceName} could be found. Please check
                                out the internet
                            </Heading>
                            <StyledBtns>
                                <BackButton />

                                <Button onClick={() => navigate("/home")}>
                                    Back Home
                                </Button>
                            </StyledBtns>
                        </div>

                        <div>
                            <img
                                src="/public/images/error/doctor-woman-400px-2.png"
                                alt=""
                            />
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default Empty;
