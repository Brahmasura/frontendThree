import style from "./home.module.scss";
import tick from "../../assets/images/icon-list.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [email, setEmail] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handlemailChange = (e) => {
    setIsError(false);
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      setIsError(true);
      setErrorMsg("Enter email");
      return;
    } else if (!emailPattern.test(email)) {
      setIsError(true);
      setErrorMsg("Valid email required");
      return;
    } else {
      navigate("/submit", { state: email });
    }
  };

  return (
    <div className={style.mainDiv}>
      <div className={`container-fluid ${style.contentDiv}`}>
        <div className="row">
          <div className={`col-lg-7 ${style.leftCol}`}>
            <h1>Stay updated!</h1>
            <h2>Join 60,000+ product managers receiving monthly updates on:</h2>
            <div className={style.tickPara}>
              <img src={tick} alt="check list" />
              <p>Product discovery and building what matters</p>
            </div>

            <div className={style.tickPara}>
              <img src={tick} alt="check list" />
              <p>Measuring to ensure updates are a success</p>
            </div>

            <div className={style.tickPara}>
              <img src={tick} alt="check list" />
              <p>And much more!</p>
            </div>

            {/* now the form begins */}
            <form onSubmit={handleSubmit}>
              <label>Email address</label>
              {isError && <p className={style.errorPara}>{errorMsg}</p>}
              <br />

              <input
                type="text"
                name="emailAddress"
                value={email}
                placeholder="email@company.com"
                onChange={handlemailChange}
                className={isError ? style.inputErrored : style.inputNormal}
              />
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
