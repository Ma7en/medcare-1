/* eslint-disable no-unused-vars */
import { useSearchParams } from "react-router-dom";

import { useBlogs } from "./useBlogs";

import Spinner from "../../ui/spinner/Spinner";
import Empty from "../../ui/error/Empty";

import Menus from "../../ui/modal/Menus";
import Table from "../../ui/table/Table";
import BlogRow from "./BlogRow";
import Pagination from "../../ui/pfs/Pagination";

// const TableHeader = styled.header`
//     display: grid;
//     grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//     column-gap: 2.4rem;
//     align-items: center;
//     background-color: var(--color-grey-50);
//     border-bottom: 1px solid var(--color-grey-100);
//     text-transform: uppercase;
//     letter-spacing: 0.4px;
//     font-weight: 600;
//     color: var(--color-grey-600);
//     padding: 1.6rem 2.4rem;
// `;

function BlogTable() {
    const count = 10;
    const { isLoading, blogs } = useBlogs();
    const [searchParams] = useSearchParams();

    if (isLoading) return <Spinner />;
    if (!blogs.length) return <Empty resourceName="blogs" />;

    // // 1) filter
    // const filterValue = searchParams.get("discount") || "all";

    // let filteredServices;
    // if (filterValue === "all") filteredServices = services;
    // if (filterValue === "no-discount")
    //     filteredServices = services.filter((cabin) => cabin.discount === 0);
    // if (filterValue === "with-discount")
    //     filteredServices = services.filter((cabin) => cabin.discount > 0);

    // 2) sort
    const sortBy = searchParams.get("sortBy") || "startDate-asc";
    const [field, direction] = sortBy.split("-");
    const modifier = direction === "asc" ? 1 : -1;
    const sortedBlogs = blogs.sort((a, b) => (a[field] - b[field]) * modifier);

    return (
        <>
            <Menus>
                <Table columns="0.6fr 0.6fr 2fr .6fr .6fr 0.2fr">
                    <Table.Header>
                        <div>images</div>
                        <div>title</div>
                        <div>summary</div>
                        <div>data</div>
                        <div>admin</div>
                        <div></div>
                    </Table.Header>

                    <Table.Body
                        // data={cabins}
                        // data={filteredServices}
                        data={sortedBlogs}
                        render={(blog) => <BlogRow blog={blog} key={blog.id} />}
                    />

                    <Table.Footer>
                        <Pagination count={count} />
                        {/* <Pagination /> */}
                    </Table.Footer>
                    {/* {cabins.map((cabin) => (
                        <CabinRow cabin={cabin} key={cabin.id} />
                    ))} */}
                </Table>
            </Menus>
        </>
    );
}

export default BlogTable;
