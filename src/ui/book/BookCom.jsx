function BookCom() {
    return (
        <>
            <section className="book" id="book">
                <div className="container">
                    <h1 className="heading">
                        <span>book</span>
                        now
                    </h1>

                    <div className="row">
                        <div className="image">
                            <img
                                src="images/book/book-img.svg"
                                alt="book img"
                            />
                        </div>

                        <form action="#">
                            <h3>book appointment</h3>
                            <input
                                type="text"
                                placeholder="your name"
                                className="box"
                                required
                            />
                            <input
                                type="number"
                                placeholder="your number"
                                className="box"
                                required
                            />
                            <input
                                type="email"
                                placeholder="your email"
                                className="box"
                            />
                            <input type="date" className="box" />
                            <textarea
                                name=""
                                id=""
                                // cols="30"
                                // rows="10"
                                className="box"
                                placeholder="Your subject"
                            />
                            <input
                                type="submit"
                                defaultValue="book now"
                                className="btn"
                            />
                        </form>
                    </div>
                </div>
            </section>
            <div className="spikes" />
        </>
    );
}

export default BookCom;
