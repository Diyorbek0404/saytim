import { useEffect, useState } from "react"
import axios from "axios";
import Latestnew from "./Latestnew";

function LatestNews() {
  const axiosInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL, })
  const [posts, setPosts] = useState([]);
  const [postsPerPage] = useState(1);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axiosInstance.get("/posts")
      setPosts(res.data)
      setLoading(false)
    }
    fetchPosts()
  }, [])
  return (
    <>
      <p style={{
        fontSize: "22px"
      }}
        className="mt-4">
        <i className="fas fa-dot-circle text-primary"></i> So'ngi yangiliklar
      </p>
      <Latestnew posts={posts} postsPerPage={postsPerPage} loading={loading} />
    </>
  );
}

export default LatestNews;
