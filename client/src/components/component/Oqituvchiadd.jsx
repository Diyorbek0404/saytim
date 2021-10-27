import { useState } from "react"
import axios from "axios"


function Oqituvciadd() {
    const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL,})
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [file, setFile] = useState(null)

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
            await axiosInstance.post("/teacherpost", newPost)
            window.location.replace("/mamuriyat");
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
                <label htmlFor="fileInputphoto">
                    <span className="btn btn-outline-dark shadow-none"><i className="fas fa-plus"></i></span>
                </label>
                <input id="fileInputphoto" type="file" style={{ display: "none" }} onChange={
                    e => setFile(e.target.files[0])
                } />
                <input
                    className="write-post"
                    placeholder="Oqituvchi ismi va falimyasi"
                    type="text"
                    value={title}
                    autoFocus={true}
                    onChange={e => setTitle(e.target.value)}
                />
                <textarea
                    className="write-post mt-3"
                    placeholder="o'qituvchi haqida malumot..."
                    type="text"
                    value={desc}
                    autoFocus={true}
                    onChange={e => setDesc(e.target.value)}
                />
                <button className="btn btn-success shadow-none" type="submit">
                    O'qituvchi qo'shish
                </button>
            </form>
        </div>
    )
}

export default Oqituvciadd