import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from "react-router"
import { Context } from '../../context/Context';


function SingleChild() {
    const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL,})
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [childpost, setChildpost] = useState({})
    const { user } = useContext(Context)
    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [fathername, setFathername] = useState("")
    const [desc, setDesc] = useState("");
    const [selectAge, setSelectAge] = useState("")
    const [sinf, setSinf] = useState("")
    const [yutuq, setYutuq] = useState("")
    const [loading, setLoading] = useState(false)
    const [updateChild, setUpdateChild] = useState(false)


    useEffect(() => {
        const getchldpost = async () => {
            setLoading(true)
            const res = await axiosInstance.get("/children/" + path)
            setChildpost(res.data)
            setName(res.data.name)
            setLastname(res.data.lastname)
            setFathername(res.data.fathername)
            setDesc(res.data.desc)
            setSelectAge(res.data.selectAge)
            setSinf(res.data.sinf)
            setYutuq(res.data.yutuq)
            setLoading(false)
        }
        getchldpost()
    }, [path])

    const handleDelete = async () => {
        try {
            await axiosInstance.delete(`/children/${childpost._id}`)
            window.location.replace("/oquvchilar")
        } catch (error) {
            console.log(error)
        }
    }

    const handleUpdate = async () => {
        try {
            await axiosInstance.put(`/children/${childpost._id}`, {
                name, desc, lastname, fathername, selectAge, sinf, yutuq
            });
            setUpdateChild(false)
        } catch (err) {

        }
    }

    const PostPicture = "http://5.182.26.105:8080/images/";

    if (loading) {
        return (
            <h2 className="m-5">
                Yangilanmoqda
            </h2>
        )
    }
    return (
        <div className="container">
            <div className="card mb-3 shadow">
                <div className="row no-gutters">
                    <div className="col-md-5">
                        {
                            childpost.photo && (
                                <img
                                    src={PostPicture + childpost.photo}
                                    alt="rasm"
                                    className="w-100 p-2 h-100"
                                />
                            )
                        }
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            {
                                user && (
                                    <p style={{
                                        float: "right",
                                    }}>
                                        <button onClick={() => setUpdateChild(true)} className="btn shadow-none"><i className="far fa-edit text-danger"></i></button>
                                        <button onClick={handleDelete} className="btn shadow-none"><i className="fad fa-trash-alt text-primary"></i></button>
                                    </p>
                                )
                            }
                            <h5 className="card-title">
                                <span>
                                    {
                                        updateChild ?
                                            <input
                                                type="text"
                                                value={lastname}
                                                onChange={e => setLastname(e.target.value)}
                                                className="form-control w-25 d-inline-block shadow-none"
                                            /> :
                                            <span>
                                                {lastname}
                                            </span>
                                    }
                                </span>
                                <span className="pl-2">
                                    {
                                        updateChild ?
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={e => setName(e.target.value)}
                                                className="form-control w-25 d-inline-block shadow-none"
                                            />
                                            :
                                            <span>
                                                {name}
                                            </span>
                                    }
                                </span>
                                <span className="pl-2">
                                    {
                                        updateChild ?
                                            <input
                                                type="text"
                                                value={fathername}
                                                onChange={e => setFathername(e.target.value)}
                                                className="form-control w-25 d-inline-block shadow-none"
                                            />
                                            :
                                            <span>
                                                {fathername}
                                            </span>
                                    }
                                </span>
                            </h5>
                            <p className="card-text">
                                {
                                    updateChild ? (
                                        <textarea
                                            className="form-control shadow-none"
                                            onChange={(e) => setDesc(e.target.value)}
                                            value={desc}
                                        >
                                        </textarea>
                                    ) : (
                                        <span>
                                            {desc}
                                        </span>
                                    )
                                }
                            </p>
                            <p style={{
                                fontWeight: "600",
                                fontSize: "18px"
                            }}>

                                O'quvchi haqida qisqacha
                            </p>
                            <p>
                                yoshi: <b>{
                                    updateChild ?
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
                                        :
                                        <span>
                                            {selectAge}
                                        </span>
                                }</b>
                            </p>
                            <p>
                                sinfi: <b> {
                                    updateChild ?
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
                                        :
                                        <span>
                                            {sinf}
                                        </span>
                                }</b>
                            </p>
                            <p>
                                erishgan yutuqlari: <b>{
                                    updateChild ?
                                        <select value={yutuq} onChange={e => setYutuq(e.target.value)} className="form-control" id="exampleFormControlSelect1">
                                            <option value="0">tanlash</option>
                                            <option value="bor">bor</option>
                                            <option value="yo'q">yo'q</option>
                                        </select>
                                        :
                                        <span>
                                            {yutuq}
                                        </span>
                                }</b>
                            </p>
                            {
                                updateChild &&
                                <button
                                    className="btn shadow-none btn-success"
                                    onClick={handleUpdate}
                                >
                                    Yangilash
                                </button>
                            }
                        </div>
                    </div>
                    {/* <div className="col-md-12">
                        <div className="card-body">
                           
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default SingleChild;