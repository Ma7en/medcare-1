/* eslint-disable no-unused-vars */
import IconCom from "./IconCom";
import { useIconsNumber } from "../../features/iconsnumber/useIconsNumber";
import Spinner from "../spinner/Spinner";
import Empty from "../error/Empty";

function IconsCom() {
    // dataupdate, icon, number, title, username, emil, user_Id

    const { isLoading, iconsnumber } = useIconsNumber();

    if (isLoading) return <Spinner />;
    if (!iconsnumber) return <Empty resourceName="iconsnumber" />;

    return (
        <>
            <section className="icons" id="iconsnumber">
                <div className="container">
                    {iconsnumber.map((iconnumber) => (
                        <IconCom iconnumber={iconnumber} key={iconnumber.id} />
                    ))}
                </div>
            </section>
            <div className="spikes" />
        </>
    );
}

export default IconsCom;
