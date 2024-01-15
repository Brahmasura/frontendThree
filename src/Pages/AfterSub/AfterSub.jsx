import style from "./afterSub.module.scss";
import tick from "../../assets/images/icon-success.svg";
import { useLocation, useNavigate } from "react-router-dom";

const AfterSub = () => {
  const location = useLocation();
  const theMail = location.state;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  
  return (
    <div className={style.mainDiv}>
      <div className={style.contentDiv}>
        <img src={tick} alt="success logo" />
        <h1>Thanks for Subscribing!</h1>
        <p>
          A confirmation email has been sent to <span>{theMail}</span>. Please
          open it and click the button inside to confirm your subscription.
        </p>
        <button onClick={handleClick}>Dismiss message</button>
      </div>
    </div>
  );
};

export default AfterSub;
