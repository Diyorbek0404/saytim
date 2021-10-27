import axios from 'axios';
import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function GetChildren() {
    const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL,})
    const [loading, setLoading] = useState(false)
    const [childrenpost, setChildrenpost] = useState([]);
    const [son, setSon] = useState("")


    useEffect(() => {
        const fetchchildrenpost = async () => {
            setLoading(true)
            const res = await axiosInstance.get("/children")
            setChildrenpost(res.data)
            setSon(res.data.length)
            setLoading(false)
        }
        fetchchildrenpost()
    }, [])


        if (loading) {
            return <h2 className="m-5">
                Yangilanmoqda...
            </h2>
        }  
        return (
            <div style={{
                overflowX :"scroll"
            }} className="scroll-yordam">
                <div className="mt-3">
                    <p style={{fontSize: "18px", fontWeight: "bold"}}>O'quvchilar haqida qisqacha : </p>
                    <p>Barcha o'quvchilar: <b>{son}</b></p>
                </div>
                <table className="table table-hover mt-5">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Ism</th>
                            <th scope="col">Familya</th>
                            <th scope="col">Sharifi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            childrenpost.map((children, inde) => {
                                let index = inde+1;
                                return (
                                    <tr key={children.createdAt}>
                                        <th scope="row"> { index } </th>
                                        <td>{children.name}</td>
                                        <td> {children.lastname} </td>
                                        <td>{children.fathername}</td>
                                        <td>
                                            <Link to={`/getchild/${children._id}`} className="btn btn-success shadow-none">Ko'proq</Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
    export default GetChildren;