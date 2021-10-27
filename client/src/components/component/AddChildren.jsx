import axios from 'axios';
import React, { useState } from 'react';

function AddChildren() {
    const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL,})
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [fathername, setFathername] = useState("");
    const [desc, setDesc] = useState("");
    const [photo, setPhoto] = useState("")
    const [selectAge, setSelectAge] = useState("one")
    const [sinf, setSinf] = useState("one")
    const [yutuq, setYutuq] = useState("one")

    // const [loading, setLoading] =useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newchildrenPost = {
            name,
            lastname,
            fathername,
            desc,
            selectAge,
            sinf,
            yutuq
        }
        if (photo) {
            const data = new FormData()
            const photoname = Date.now() + photo.name;
            data.append("name", photoname)
            data.append("file", photo)
            newchildrenPost.photo = photoname;
            try {
                await axiosInstance.post("/upload", data)
            } catch (error) {
                console.log(error)
            }
        }
        try {
            await axiosInstance.post("/children", newchildrenPost)
            window.location.replace("/oquvchilar")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <form className="writeForm shadow p-3" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-4 mt-3">
                        <label htmlFor="ism">Ism</label>
                        <input
                            className="write-post"
                            placeholder="ism"
                            type="text"
                            autoFocus={true}
                            id="ism"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="col-md-4 mt-3">
                        <label htmlFor="familya">Familya</label>
                        <input
                            className="write-post"
                            placeholder="Familya"
                            type="text"
                            autoFocus={true}
                            id="familya"
                            value={lastname}
                            onChange={e => setLastname(e.target.value)}
                        />
                    </div>
                    <div className="col-md-4  mt-3">
                        <label htmlFor="sharif">Sharifi</label>
                        <input
                            className="write-post"
                            placeholder="sharif"
                            type="text"
                            autoFocus={true}
                            id="sharif"
                            value={fathername}
                            onChange={e => setFathername(e.target.value)}
                        />
                    </div>
                    <div className="col-md-4 mt-3">
                        <textarea
                            className="write-post shadow-none"
                            value={desc}
                            autoFocus={true}
                            onChange={e => setDesc(e.target.value)}
                            placeholder="O'quvchi haqida to'liq malumot"
                        />
                    </div>
                    <div className="col-md-4 mt-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">O'quvchi yoshi</label>
                            <select value={selectAge} onChange={e => setSelectAge(e.target.value)} className="form-control" id="exampleFormControlSelect1">
                                <option value="0">tanlash</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">12</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">O'quvchi sinfi</label>
                            <select value={sinf} onChange={e => setSinf(e.target.value)} className="form-control" id="exampleFormControlSelect1">
                                <option value="0">tanlash</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Erishgan yutuqlari</label>
                            <select value={yutuq} onChange={e => setYutuq(e.target.value)} className="form-control" id="exampleFormControlSelect1">
                                <option value="0">tanlash</option>
                                <option value="bor">bor</option>
                                <option value="yo'q">yo'q</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4 mt-3">
                        <label htmlFor="filephoto">
                            <span className="btn btn-outline-dark shadow-none">
                                <i className="fas fa-plus pr-3"></i>
                                O'quvchi rasmi
                            </span>
                        </label>
                        <input id="filephoto" type="file" style={{ display: "none" }} onChange={
                            e => setPhoto(e.target.files[0])
                        } />
                    </div>
                </div>
                <button type="submit" className="btn btn-success">O'quvchi qo'shish</button>
            </form>
        </div>
    );
}

export default AddChildren;