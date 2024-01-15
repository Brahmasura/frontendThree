import style from "./home.module.scss";
import tick from "../../assets/images/icon-list.svg";


const Home = () => {
  return (
    <div className={style.mainDiv}>
      <div className={`container-fluid ${style.contentDiv}`}>
        <div className="row">
          <div className={`col-lg-7 ${style.leftCol}`}>
            <h1>Stay updated!</h1>
            <h2>Join 60,000+ product managers receiving monthly updates on:</h2>
            <div className={style.tickPara}>
                <img src={tick} alt="check list"/>
                <p>Product discovery and building what matters</p>
            </div>

            <div className={style.tickPara}>
                <img src={tick} alt="check list"/>
                <p>Measuring to ensure updates are a success</p>
            </div>

            <div className={style.tickPara}>
                <img src={tick} alt="check list"/>
                <p>And much more!</p>
            </div>


            {/* now the form begins */}
            <form>
                <label>Email address</label><br/>
                <input type="email" name="emailAddress" placeholder="email@company.com" required/>
                <button type="submit">Subscibe to monthly newsletter</button>
            </form>
           


          </div>
          <div className={`col-lg-5 ${style.rightCol}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
