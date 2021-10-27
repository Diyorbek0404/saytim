import { useEffect, useState } from "react";
import Posts from "../component/Posts";
import axios from "axios"
import Pagination from "../component/Pagination";

function News() {
  const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL,})
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axiosInstance.get("/posts")
      setPosts(res.data)
      setLoading(false)
    }
    fetchPosts()
  },[])


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container-fluid">
      <div className="row" style={{position:"relative"}}>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default News;
