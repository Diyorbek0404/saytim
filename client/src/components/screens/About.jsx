import { Link } from "react-router-dom";
import Addweb from "../component/Addweb";
import LatestNews from "../component/LatestNews";
import Makatbrasmi  from "./maktab-5.jpg"

function About() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-7">
        <div className="card mb-3">
          <img src={Makatbrasmi} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title" style={{textAlign: "center"}}>28-maktab</h3>
            <p className="card-text">
              Toshkent viloyati, Ohangaron tumani 28-umumiy o'rta ta'lim maktabi 1960-yil tashkil topgan bo'lib,
              shu kungacha yaxshi yetuk o'quvchilar yetishib chiqqan . Maktab 2017 - yili
              qayta qurilib foydalanishga topshirilgan. Hozirda o'quvchilar qulay, shinam barcha sharoitlarga ega
              maktabda tahsil olmoqda.
              </p><center style={{color: "coral", fontSize: "20px"}}>Maktab  passporti</center><br />
              Sinf xonalar   -    10  ta<br />
              <ul>
                <li>
                  boshlang'ich  sinflar   -  10  ta
                </li>
                <li>
                  yuqori  sinf va  kabintlar  -  5 ta
                </li>
              </ul><br />
              <p href="o'quvchilar.html">O'quvchilar</p>  soni   -  251  nafar<br />
              <Link to="/mamuriyat">O'qituvchilar</Link> soni   -   21  nafar<br /><br />
              Ishchi  hodimlar   -   12  nafar<br /><br />
              Oliy  ma'lumotlilar  -  14  nafar<br /><br />
              Oliy  toifalilar    -   3  nafar<br /><br />
              <ul>
                <li>
                  1-toifali  -  6 nafar 
                </li>
                <li>
                  2-toifali  -  6  nafar
                </li>
              </ul><br />
              mutaxassislar<br />
              Maktabda  ta'lim  o'zbek  tillarida  olib  boriladi
            <p></p>
          </div>
        </div>
        </div>
        <div className="col-md-5">
          <LatestNews />
          <Addweb />
        </div>
      </div>
    </div>
  );
}

export default About;
