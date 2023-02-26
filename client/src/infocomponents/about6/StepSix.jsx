import "./about.css";
import Award from "../../img/award.png"


const StepSix = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://i.ibb.co/8jR31DZ/pay.png"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">6. Payment Method</h1>
        <p className="a-sub">
          Select the payment method you want, then click checkout.
        </p>
        <p className="a-desc">
        </p>
      </div>
    </div>
  );
};

export default StepSix;
