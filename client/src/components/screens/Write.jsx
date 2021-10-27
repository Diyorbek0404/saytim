// import { useRef, useState } from "react"
import Oqituvciadd from "../component/Oqituvchiadd"
import Yangilikadd from "../component/Yangilikadd"
import YutuqaAdd from "../component/YutuqAdd"
// import Login from "./Login";




function Write() {

    // const userRef = useRef("")
    // const passwordRef = useRef("")
    // const admin = true;

    return (
            <div className="container">
                {/* { admin ? <Login /> :  */}
             <div className="accordion" id="accordionExample">
                            <div className="card" style={{ backgroundImage: "linear-gradient(to left, rgb(96, 113, 212) , #fff)" }}>
                                <div className="card-header" id="headingOne">
                                    <h2 className="mb-0">
                                        <button className="btn btn-primary shadow-none btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Yangilik qo'shish
                                        </button>
                                    </h2>
                                </div>

                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <Yangilikadd />
                                    </div>
                                </div>
                            </div>
                    <div className="card" style={{ backgroundImage: "linear-gradient(to left, rgb(96, 113, 212) , #fff)" }}>
                        <div className="card-header" id="headingTwo">
                            <h2 className="mb-0">
                                <button className="btn btn-primary shadow-none btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    O'qituvchi qo'shish
                                </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                            <div className="card-body">
                                <Oqituvciadd />
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{ backgroundImage: "linear-gradient(to left, rgb(96, 113, 212) , #fff)" }}>
                        <div className="card-header" id="headingThree">
                            <h2 className="mb-0">
                                <button className="btn btn-primary shadow-none btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Yutuq qo'shish
                                </button>
                            </h2>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                            <div className="card-body">
                                <YutuqaAdd />
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Write