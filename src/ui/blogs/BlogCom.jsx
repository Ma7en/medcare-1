/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaCalendar, FaChevronRight, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/helpers";

function BlogCom({ blog }) {
    const { id, image, data, adminname, adminid, title, summary } = blog;
    return (
        <>
            <div className="box">
                <div className="image">
                    <img src={image} alt={`blogs${id}-${adminname}`} />
                </div>

                <div className="content">
                    <div className="icon">
                        <a>
                            <FaCalendar />
                            {/* <span>1st may, 2021</span> */}
                            <span>{formatDate(data)}</span>
                        </a>

                        <Link to={`/admins/${adminid}`}>
                            <FaUser />
                            <span>{adminname}</span>
                        </Link>
                    </div>
                    <h3>{title}</h3>
                    <p>{summary}</p>
                    <Link to={`/blogs/${id}`} className="btn">
                        <span>learn more</span>
                        <FaChevronRight />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default BlogCom;
