import { Link } from "react-router-dom"
import { useContext } from 'react';
import { Context } from '../../context/Context';

function Navbar() {
    const { user } = useContext(Context);
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link className="navbar-brand" to="/"><i className="fad fa-home-lg-alt mr-3"></i>28-maktab</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Bosh sahifa</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle shad" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Biz haqimizda
                            </span>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" to="/about">Maktab Haqida</Link>
                                <Link className="dropdown-item" to="/oquvchilar">O'quvchilar</Link>
                                <Link className="dropdown-item" to="/mamuriyat">Maktab Mamuriyati</Link>
                                <Link className="dropdown-item" to="/victories">Yutuqlarimiz</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/news">Yangiliklar</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle shad" id="nwdr" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Bog'lanish
                            </span>
                            <div className="dropdown-menu" aria-labelledby="nwdr">
                                <Link className="dropdown-item" to="/contact">Aloqa</Link>
                                <Link className="dropdown-item" to="/messenger">Chat</Link>
                            </div>
                        </li>
                        {user ?
                            <li className="nav-item">
                                <Link className="nav-link" to="/adminpanel">AdminPanel</Link>
                            </li>
                            :
                            null
                        }
                        <li className="nav-item">
                            <Link to="search" className="btn shadow-none">
                                <i className="fas fa-search text-white"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
