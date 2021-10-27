import { useEffect, useState } from "react";
import axios from "axios";


const PostPicture = "http://5.182.26.105:8080/images/";


function CardsXodimlar() {
    const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL,})
    const [teacherposts, setTeacherposts] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            const res = await axiosInstance.get("/teacherpost")
            setTeacherposts(res.data)
            setLoading(false)
        }
        fetchPosts()
    }, [])
    if (loading) {
        return <h2 style={{color:"#666"}} className="m-5">
        Loading...
      </h2>
    }
    return (
        <>
            {
                teacherposts.map(teacher => {
                    return (
                        <div key={teacher._id} className="card mt-4">
                            {teacher.photo && (
                                <img
                                    className="card-img-top"
                                    src={PostPicture + teacher.photo}
                                    alt="o'qituvchilar"
                                />
                            )}
                            <div className="card-body">
                                <h6 className="text-center">{teacher.title}</h6>
                                <p>{teacher.desc}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default CardsXodimlar