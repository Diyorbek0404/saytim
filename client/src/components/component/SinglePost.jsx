import { useEffect, useState, useContext } from "react"
import { useLocation } from "react-router"
import axios from "axios"
import { Context } from "../../context/Context"
import "./loader.scss"

function SinglePost() {
    const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL,})
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [post, setPost] = useState({})
    // const [updatePost, setUpdatePost] = useState(false)
    const { user } = useContext(Context);
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [updateMode, setUpdateMode] = useState(false)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        const getPost = async () => {
            setLoading(true)
            const res = await axiosInstance.get("/posts/" + path)
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
            setLoading(false)
        }
        getPost()
    }, [path])

    const handleDelete = async () => {
        try {
            await axiosInstance.delete(`/posts/${post._id}`, {
                data:
                    { username: user.username }
            });
            window.location.replace("/news")
        } catch (err) {

        }

    }

    const handleUpdate = async () => {
        try {
            await axiosInstance.put(`/posts/${post._id}`, {
                username: user.username, title, desc
            });
            setUpdateMode(false)
        } catch (err) {

        }
    }


    const PostPicture = "http://5.182.26.105:8080/images/";
    if (loading) {
        return (
            <div className="container">
                <div className="card">
                    <div className="shimmerBG media-loader"></div>
                    <div className="p-32">
                        <div className="shimmerBG title-line"></div>
                        <div className="shimmerBG title-line end"></div>
                        <div className="shimmerBG content-line m-t-24"></div>
                        <div className="shimmerBG content-line"></div>
                        <div className="shimmerBG content-line"></div>
                        <div className="shimmerBG content-line"></div>
                        <div className="shimmerBG content-line end"></div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12 w-100">
                    <div className="card w-100">
                        {
                            post.photo && (
                                <img
                                    src={PostPicture + post.photo}
                                    className="w-100 card-img-top"
                                    alt="rasm"
                                />
                            )}
                        <div className="card-body">
                            {
                                updateMode ? (
                                    <input
                                        type="text"
                                        value={title}
                                        className="form-control shadow-none mx-auto w-75"
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                ) : (
                                    <>
                                        <h5 className="text-center">
                                            {title}
                                            {
                                                post.username === user?.username && (
                                                    <span style={{ float: "right" }}>
                                                        <button onClick={() =>
                                                            setUpdateMode(true)
                                                        } className="btn shadow-none"><i className="far fa-edit text-danger"></i></button>
                                                        <button onClick={
                                                            handleDelete
                                                        } className="btn shadow-none"><i className="fad fa-trash-alt text-primary"></i></button>
                                                    </span>
                                                )
                                            }
                                        </h5> <br />
                                    </>
                                )}
                            <div className="row">
                                <span className="col-sm-6">
                                    <i className="fad fa-calendar fa-lg"></i> <span style={{ color: "#666" }}>{new Date(post.createdAt).toLocaleString()}</span>
                                </span>
                                <span className="col-sm-6" style={{ color: "#666", float: "right" }}>
                                    <i className="fad fa-user fa-lg mr-2"></i>Author: <b>{post.username}</b>
                                </span>
                            </div>
                            {
                                updateMode ? (
                                    <textarea rows="10" onChange={(e) => setDesc(e.target.value)} value={desc} className="form-control shadow-none"></textarea>
                                ) : (
                                    <p className="card-text mt-2">
                                        {desc}
                                    </p>
                                )}
                            {
                                updateMode &&
                                <button className="btn btn-primary shadow-none mt-2" onClick={handleUpdate}>yangilash</button>
                            }
                            <hr />

                            {/* comment component */}
                            <div className="mt-4">
                                <label htmlFor="namecomment">Ismingiz</label>
                                <input
                                    type="text"
                                    className="form-control shadow-none w-50"
                                    id="namecomment"
                                />
                                <label htmlFor="commentdesc">Fikringiz</label>
                                <textarea
                                    className="form-control shadow-none w-50" 
                                    id="commentdesc"
                                />
                                <button className="btn btn-outline-success shadow-none mt-3">Fikr bildirish</button>
                            </div>

                            {/* comment component end */}



                            {/* comment get */}

                            {/* comments get end */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePost