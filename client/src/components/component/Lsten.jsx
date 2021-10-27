import { Link } from "react-router-dom"

const PostPicture = "http://5.182.26.105:8080/images/";

function Lsten ({post}) {
    return (
        <Link to={`/post/${post._id}`} className="text-decoration-none text-dark">
        <div key={post._id} className="media w-100 p-2 mt-2" style={{
            border: "1px solid #333",
            borderRadius: "10px"
        }}>
            {post.photo && (
                <img 
                    src={PostPicture + post.photo}
                    className="mr-3" 
                    alt="..." 
                    style={{width: "100px", height: "100px", borderRadius: "5px"}}
                />

            )}
            <div className="media-body">
                <h5 className="mt-0">{post.title}</h5>
                <p className="newslatestdesc">
                    {post.desc}
                </p>
            </div>
        </div></Link>
    )
}
export default Lsten