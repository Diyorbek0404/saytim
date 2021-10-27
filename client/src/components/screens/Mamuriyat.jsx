import Addweb from "../component/Addweb";
import CardsXodimlar from "../component/CardsXodimlar";
import LatestNews from "../component/LatestNews";


function Mamuriyat() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-7">
          <CardsXodimlar  />
        </div>
        <div className="col-md-5">
          <LatestNews />
          <Addweb />
        </div>
      </div>
    </div>
  );
}

export default Mamuriyat;
