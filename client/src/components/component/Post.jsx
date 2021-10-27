import { Link } from "react-router-dom"

const PostPicture = "http://5.182.26.105:8080/images/";


function Post({post}) {
   return (
    <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="card mt-2" style={{
            height:"474px"
        }}>
            {post.photo && (
                <img 
                style={{height:"200px"}}
                className="card-img-top"
                src={PostPicture + post.photo}
                alt="news title" 
            />
            )}
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <small style={{color:"#999", paddingBottom: "5px"}}>{new Date(post.createdAt).toDateString()}</small>
                <p className="card-text post-desc">
                    {post.desc}
                </p>
                <Link to={`/post/${post._id}`} className="btn btn-primary shadow-none" style={{
                    position: "absolute",
                    bottom: "5px"
                }}>Ko'proq O'qing</Link>
            </div>
        </div>
    </div>
   )
}

export default Post