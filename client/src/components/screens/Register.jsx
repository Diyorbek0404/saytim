import { Link } from "react-router-dom"

function Register() {
    return (
        <div className="container">
            <form className="bg-white p-3" style={{borderRadius:"10px"}}>
                <h2 className="text-center">Ro'yxatdan o'tish</h2>
                <div className="form-group">
                    <label htmlfor="exampleInputtext1">Foydalanuvchi nomi</label>
                    <input type="text" className="form-control shadow-none" id="exampleInputtext1" aria-describedby="textHelp" />
                </div>
                <div className="form-group">
                    <label htmlfor="exampleInputEmail1">Email manzil</label>
                    <input type="email" className="form-control shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlfor="exampleInputPassword1">Parol</label>
                    <input type="password" className="form-control shadow-none" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary shadow-none">Submit</button> <br />
                <Link to="/login" className="text-decoration-none">allaqachon akauntingiz bormi</Link>
            </form>
        </div>
    )
}

export default Register