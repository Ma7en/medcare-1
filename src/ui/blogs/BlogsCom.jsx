import { FaCalendar, FaChevronRight, FaUser } from "react-icons/fa";

function BlogsCom() {
    return (
        <>
            <section className="blogs" id="blogs">
                <div className="container">
                    <h1 className="heading">
                        our
                        <span>blogs</span>
                    </h1>

                    <div className="box-container">
                        <div className="box">
                            <div className="image">
                                <img
                                    src="images/blogs/blog-1.jpg"
                                    alt="blogs1"
                                />
                            </div>

                            <div className="content">
                                <div className="icon">
                                    <a href="#">
                                        <FaCalendar />
                                        <span>1st may, 2021</span>
                                    </a>
                                    <a href="#">
                                        <FaUser />
                                        <span>by admin</span>
                                    </a>
                                </div>
                                <h3>blog title goes here</h3>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Provident, eius.
                                </p>
                                <a href="#" className="btn">
                                    <span>learn more</span>
                                    <FaChevronRight />
                                </a>
                            </div>
                        </div>
                        {/* 2 */}
                        <div className="box">
                            <div className="image">
                                <img
                                    src="images/blogs/blog-2.jpg"
                                    alt="blogs2"
                                />
                            </div>
                            <div className="content">
                                <div className="icon">
                                    <a href="#">
                                        <FaCalendar />
                                        <span>1st may, 2021</span>
                                    </a>
                                    <a href="#">
                                        <FaUser />
                                        <span>by admin</span>
                                    </a>
                                </div>
                                <h3>blog title goes here</h3>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Provident, eius.
                                </p>
                                <a href="#" className="btn">
                                    <span>learn more</span>
                                    <FaChevronRight />
                                </a>
                            </div>
                        </div>
                        {/* 3 */}
                        <div className="box">
                            <div className="image">
                                <img
                                    src="images/blogs/blog-3.jpg"
                                    alt="blogs3"
                                />
                            </div>
                            <div className="content">
                                <div className="icon">
                                    <a href="#">
                                        <FaCalendar />
                                        <span>1st may, 2021</span>
                                    </a>
                                    <a href="#">
                                        <FaUser />
                                        <span>by admin</span>
                                    </a>
                                </div>
                                <h3>blog title goes here</h3>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Provident, eius.
                                </p>
                                <a href="#" className="btn">
                                    <span>learn more</span>
                                    <FaChevronRight />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="spikes" />
        </>
    );
}

export default BlogsCom;
