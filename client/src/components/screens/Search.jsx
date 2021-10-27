import React, { useState } from 'react';
import { Link } from "react-router-dom"

const PostPicture = "http://5.182.26.105:8080/images/";

function Search() {
    const [search, setSearch] = useState('')
    const [userDetails, setUserDetails] = useState([])

    const fetchPost = (query) => {
        setSearch(query)
        fetch("http://5.182.26.105/api/posts/searchpost", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query
            })
        }).then(res => res.json())
            .then(result => {
                setUserDetails(result.post)
            })
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <input
                    type="text"
                    placeholder="search post"
                    value={search}
                    name="search"
                    onChange={(e) => fetchPost(e.target.value)}
                    style={{
                        width: "50%"
                    }}
                    className="form-control"
                />
            </div>
            <ul>
                {
                    userDetails.map(item => {
                        return (
                            <Link key={item._id} to={item._id ? "/post/" + item._id : "/news"} onClick={() => {
                                setSearch("")
                            }} className="text-decoration-none text-dark">
                                <div className="media w-100 p-2 mt-2">
                                    <img src={PostPicture + item.photo} className="mr-3" alt="..." style={{ width: "100px", height: "100px", borderRadius: "5px" }} />
                                    <div className="media-body">
                                        <h5 className="mt-0">{item.title}</h5>
                                        <p className="newslatestdesc">{item.desc}</p>
                                    </div>
                                </div> <hr />
                            </Link>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Search;