import React, { useEffect, useState, useContext } from 'react';
import axios from "axios"
import { Context } from "../../context/Context"

function Messenger(props) {
    const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL,})
    const [message, setMessage] = useState([])
    const [name, setName] = useState("")
    const [messageid, setMessageid] = useState({});
    const [messagedesc, setMessagedesc] = useState("")
    const [editMessage, setEditMessage] = useState(false)
    // const [loading, setLoading] = useState(false)

    useEffect(() => {
        setInterval(() => {
            const getMessage = async () => {
                const res = await axiosInstance.get("/messanger")
                setMessage(res.data)
                console.log(res.data)
            }
            getMessage()
        }, 300);
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newMessage = {
            name,
            messagedesc,
        }
        try {
            await axiosInstance.post("/messanger", newMessage)
            // window.location.replace("/messenger")
        } catch (error) {
            console.log(error)
        }
        setMessagedesc("");
    }

    // const handlegetbyid = async () => {
    //     try {
    //         const res = await axios.get(`/messanger/${messageid._id}`)
    //         console.log(res.data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const handledelete = async () => {
        try {
            await axiosInstance.delete("/messanger");
        } catch (error) {
            console.log(error)
        }
    }

    const handledeleteall = async () => {
        try {
            await axiosInstance.delete("/messanger/all")
        } catch (error) {
            console.log(error)
        }
    }

    // const handledeletebyid = async () => {
    //     try {
    //         await axios.delete(`/messanger/`)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const { user } = useContext(Context)

    return (
        <div className="container">
            <h3 className="text-center">Messenger</h3>
            <div className="getMessage">
                <div className="container" style={{
                    with: "100%",
                    padding: "8px",
                    borderRadius: "8px",
                    backgroundColor: "#111",
                    color: "#fff"
                }}>
                    <div className="row">
                        <div className="col-6 text-center">
                            <img
                                src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80"
                                alt="rasm"
                                style={{
                                    width: "45px",
                                    height: "45px",
                                    borderRadius: "50%"
                                }}
                            />
                            <span className="pl-3">Messenger</span>
                        </div>
                        <div className="col-6">
                            <div className="dropdown d-flex justify-content-end">
                                <button className="btn shadow-none dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-ellipsis-v text-white dr-it"></i>
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li onClick={handledelete} className="dropdown-item">
                                        Ohirgi habarni o'chirish
                                    </li>
                                    {
                                        user ? <li onClick={handledeleteall} className="dropdown-item">
                                            Tarixni tozlash
                                        </li>
                                        : 
                                        null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul style={{
                    padding: "0",
                    listStyle: "none",
                }}>
                    {
                        message.map(messa => {
                            return (

                                <li className="item-message" key={messa._id} style={{
                                    borderRadius: "10px",
                                    backgroundColor: "#444",  //user ? "#8774E1" :
                                    padding: "3px",
                                    marginTop: "10px",
                                    float: "right",
                                    position: "relative"
                                }}
                                // onClick={async () => {
                                //     // try {
                                //     //     const res = await axios.get(`/messanger/${messa._id}`)
                                //     //     setMessageid(res.data)
                                //     // } catch (error) {
                                //     //     console.log(error)
                                //     // }
                                //     try {
                                //         await axios.delete(`/messanger/${messa._id}`)
                                //     } catch (error) {
                                //         console.log(error)
                                //     }
                                // }}
                                // onDoubleClick={async () => {
                                //     try {
                                //         const res = await axios.get(`/messanger/${messa._id}`)
                                //         setMessageid(res.data)
                                //         console.log(messageid._id)
                                //     } catch (error) {
                                //         console.log(error)
                                //     }
                                //     setEditMessage(true)
                                // }}
                                >
                                    {/* <div className="dropdown-menu" aria-labelledby="drmen">
                                        <button onClick={async () => {
                                            try {
                                                await axios.delete(`/messanger/${messa._id}`)
                                            } catch (error) {
                                                console.log(error)
                                            }
                                        }}>O'chirish</button>
                                    </div> */}

                                    { }
                                    <span style={{
                                        fontSize: "15px",
                                        color: "red",
                                        fontWeight: "600",
                                        paddingLeft: "8px",
                                    }}>
                                        {
                                            (messa._id === messageid._id) && (editMessage) ? (
                                                <input
                                                    type="text"
                                                    value={name}
                                                    className="form-control w-25 ml-2"
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                            ) : (
                                                <span>
                                                    <span>
                                                        {messa.name}
                                                    </span>
                                                    <button style={{ float: "right" }} className="btn shadow-none p-1" onClick={async () => {
                                                        try {
                                                            await axiosInstance.delete(`/messanger/${messa._id}`)
                                                        } catch (error) {
                                                            console.log(error)
                                                        }
                                                    }}>
                                                        <i className="far fa-trash-alt text-white"></i>
                                                    </button>
                                                    <button style={{ float: "right" }} className="btn shadow-none p-1" onClick={async () => {
                                                        try {
                                                            const res = await axiosInstance.get(`/messanger/${messa._id}`)
                                                            setMessageid(res.data)
                                                            console.log(messageid._id)
                                                        } catch (error) {
                                                            console.log(error)
                                                        }
                                                        setEditMessage(true)
                                                    }}>
                                                        <i className="fas fa-pencil-alt text-white"></i>
                                                    </button>
                                                </span>
                                            )}
                                    </span>
                                    <p style={{
                                        paddingTop: "10px",
                                        paddingLeft: "8px",
                                    }}>


                                        {/* MODAL WINDOW START */}

                                        <div className="modal fade" id="modalfa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content bg-dark">
                                                    <div className="modal-body">
                                                        {/* <button className="btn btn-danger shadow-none" onClick={async () => {
                                                            try {
                                                                await axios.delete(`/messanger/${messa._id}`)
                                                            } catch (error) {
                                                                console.log(error)
                                                            }
                                                        }

                                                        }>O'chirish</button> */}
                                                        <ul className="list-group bg-dark">
                                                            <li className="btn btn-dark list-group-item text-white bg-dark" onClick={async () => {
                                                                try {
                                                                    await axiosInstance.delete(`/messanger/${messa._id}`)
                                                                } catch (error) {
                                                                    console.log(error)
                                                                }
                                                            }

                                                            }>O'chirish</li>
                                                            <li className="btn btn-dark list-group-item text-white bg-dark mt-2" onClick={async () => {
                                                                try {
                                                                    const res = await axiosInstance.get(`/messanger/${messa._id}`)
                                                                    setMessageid(res.data)
                                                                    console.log(messageid._id)
                                                                } catch (error) {
                                                                    console.log(error)
                                                                }
                                                                setEditMessage(true)
                                                            }
                                                            }>Yangilash</li>
                                                        </ul>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* MODAL WINDOW END */}


                                        {
                                            (messa._id === messageid._id) && (editMessage) ? (
                                                <input
                                                    type="text"
                                                    value={messagedesc}
                                                    className="form-control"
                                                    onChange={(e) => setMessagedesc(e.target.value)}
                                                />
                                            ) : (
                                                <span>
                                                    {messa.messagedesc}
                                                </span>
                                            )}
                                        {
                                            (messa._id === messageid._id) && (editMessage) &&
                                            <button className="btn shadow-none btn-primary mt-2" onClick={async () => {
                                                try {
                                                    await axiosInstance.put(`/messanger/${messa._id}`, {
                                                        name, messagedesc
                                                    })
                                                } catch (error) {
                                                    console.log(error)
                                                }
                                                setEditMessage(false)
                                                setMessagedesc("");
                                            }}>Yangilash</button>
                                        }
                                    </p>
                                    <span style={{
                                        fontSize: "13px",
                                        position: "absolute",
                                        right: "3px",
                                        bottom: "3px",
                                        color: "#aaa" //user ? "#333" :
                                    }}>
                                        {
                                            (messa.createdAt !== messa.updatedAt)
                                                ?
                                                <span className="pr-2">tahrirlangan</span>
                                                :
                                                null
                                        }
                                        {new Date(messa.createdAt).getHours()}:
                                        {new Date(messa.createdAt).getMinutes()}
                                    </span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            {/* <button onClick={e => window.localStorage.clear()}> ddvzsfvzf</button> */}
            <form className="postmessage" onSubmit={handleSubmit}>
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type="text"
                    className="form-control"
                />
                <textarea
                    className="form-control mt-3"
                    value={messagedesc}
                    onChange={e => setMessagedesc(e.target.value)}
                />
                <button type="submit" className="btn btn-success shadow-none mt-3">
                    <i className="fas fa-upload"></i>
                </button>
            </form>
        </div>
    );
}

export default Messenger;