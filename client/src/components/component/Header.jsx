import Headerimg1 from "./maktab-6.jpg"
import Headerimg2 from "./maktab-5.jpg"
import Headerimg3 from "./maktab-2.jpg"


function Header() {
  return (
    <div className="container mt-4 mb-5">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img 
                        src={Headerimg1} 
                        className="d-block w-100" 
                        alt="..." 
                        style={{
                            borderRadius: "20px"
                        }}
                    />
                </div>
                <div className="carousel-item">
                    <img 
                        src={Headerimg2} 
                        className="d-block w-100" 
                        alt="..." 
                        style={{
                            borderRadius: "20px"
                        }}
                    />
                </div>
                <div className="carousel-item">
                    <img 
                        src={Headerimg3}
                        className="d-block w-100" 
                        alt="..." 
                        style={{
                            borderRadius: "20px"
                        }}
                    />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
    </div>
  );
}

export default Header;
