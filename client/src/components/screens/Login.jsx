import { useContext, useRef } from "react";
// import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";

function Login() {
    const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL,})
    const userRef = useRef();
    const passwordRef = useRef()
    const {dispatch, isFetching, } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch({type:"LOGIN_START"})
        try {
            const res = await axiosInstance.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value
            })
            dispatch({type:"LOGIN_SUCCESS", payload:res.data})
        } catch (err) {
            dispatch({type:"LOGIN_FAILURE", })
        }
    }
    return (
        <div className="container">
            <form className="container bg-white p-3" style={{ borderRadius: "10px" }} onSubmit={
                handleSubmit
            }>
                <h2 className="text-center">Kirish</h2>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Ism</label>
                    <input
                        type="text" 
                        className="form-control shadow-none" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        ref={userRef} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Parol</label>
                    <input 
                        type="password" 
                        className="form-control shadow-none" 
                        id="exampleInputPassword1"
                        ref={passwordRef}  
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary shadow-none"
                    disabled={isFetching}
                >
                        Kirish
                </button> <br />
                {/* <Link to="/register" className="text-decoration-none">Akkauntingiz yo'qmi unda ro'yxatdan o'ting</Link> */}
            </form>
        </div>
    )
}

export default Login