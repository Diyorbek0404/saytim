import {useState, useEffect} from "react";
import axios from "axios"

const PostPicture = "http://5.182.26.105:8080/images/";


function Victories() {
  const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL,})
  const [yutuqlarimiz, setYutuqlarimiz] = useState([])

  useEffect(() => {
    const fetchYutuq = async () => {
      const res = await axiosInstance.get("/yutuq")
      setYutuqlarimiz(res.data)
    }
    fetchYutuq()
  }, [])
  return (
    <div className="container">
     <div className="row">
       {
        yutuqlarimiz.map(yutuq => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div key={yutuq.createdAt} className="card mt-2" style={{
                borderRadius: "20px"
              }}> 
                <img src={PostPicture + yutuq.photo} alt="yutuqlarimiz rasmlari" style={{
                borderRadius: "20px",
                height:"362px"
              }} />
              </div>
            </div>
          )
        })
      }
     </div>
    </div>
  );
}

export default Victories;
