import { useState } from "react"
import axios from "axios"


function YutuqaAdd() {
    const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL,})
    const [file, setFile] = useState(null)
    const [title, ] = useState("")
    const [desc, ] = useState("")

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            title,
            desc,
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axiosInstance.post("/upload", data);
            } catch (err) {
                console.log(err)
            }
        }
        try {
            await axiosInstance.post("/yutuq", newPost)
            window.location.replace("/victories");
        } catch (err) { 
            console.log(err)
        }
    }

    return (
        <div className="container">
            {
                file && (
                    <img
                        src={URL.createObjectURL(file)}
                        alt="ss"
                        className="write-img"
                    />
                )}
            <form className="writeForm" onSubmit={handleSubmit}>
                <label htmlFor="yutuq">
                    <span className="btn btn-outline-dark shadow-none"><i className="fas fa-plus"></i></span>
                </label>
                <input id="yutuq" type="file" style={{ display: "none" }} onChange={
                    e => setFile(e.target.files[0])
                } />
                <button className="btn btn-success shadow-none" type="submit">
                    Yutuq qo'shish
                </button>
            </form>
        </div>
    )
}

export default YutuqaAdd