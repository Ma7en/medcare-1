import BookReview from "../ui/book/BookReview";
import Footer from "../ui/footer/Footer";
import Header from "../ui/header/Header";
import LinksCom from "../ui/links/LinksCom";

function Book() {
    return (
        <>
            <Header />
            <BookReview />
            <LinksCom />
            <Footer />
        </>
    );
}

export default Book;
