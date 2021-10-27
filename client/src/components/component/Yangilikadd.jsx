import { useContext, useState } from "react"
import axios from "axios"
import { Context } from "../../context/Context"

function Yangilikadd() {
    const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL,})

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [file, setFile] = useState(null)
    const {user} = useContext(Context)


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
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
            } catch (err) { }
        }
        try {
            await axiosInstance.post("/posts", newPost)
            window.location.replace("/news");
        } catch (err) { }
    }

    return (
        <div className="container">
            {
                file && (
                    <img
                        src={URL.createObjectURL(file)}
                        alt="ss"
                        className="p-3 write-img"
                    />
                )}
            <form className="writeForm" onSubmit={handleSubmit}>
                <label htmlFor="fileInput">
                    <span className="btn btn-outline-dark shadow-none"><i className="fas fa-plus"></i></span>
                </label>
                <input id="fileInput" type="file" style={{ display: "none" }} onChange={
                    e => setFile(e.target.files[0])
                } />
                <input
                    className="write-post"
                    placeholder="Mavzu"
                    type="text"
                    value={title}
                    autoFocus={true}
                    onChange={e => setTitle(e.target.value)}
                />
                <textarea
                    className="write-post mt-3"
                    placeholder="iltimos yozing..."
                    type="text"
                    value={desc}
                    autoFocus={true}
                    onChange={e => setDesc(e.target.value)}
                />
                <button className="btn btn-success shadow-none" type="submit">
                    Yangilik qo'shish
                </button>
            </form>
        </div>
    )
}

export default Yangilikadd