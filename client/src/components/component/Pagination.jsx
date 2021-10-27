import { Link } from "react-router-dom";


const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <nav style={{position: "absolute", bottom:"-63px", right:"50%", left:"50%"}}>
                <ul className='pagination'>
                    {pageNumbers.map(number => (
                        <li key={number} className='page-item shadow-none'>
                            <Link onClick={() => paginate(number)} to='/news/!#' className='page-link shadow-none'>
                                {number}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Pagination