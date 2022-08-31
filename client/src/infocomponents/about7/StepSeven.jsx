import "./about.css";
import Award from "../../img/award.png"


const StepSeven = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://i.ibb.co/RYXx6vb/konfirmpay.png"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">7. Confirm Order</h1>
        <p className="a-sub">
          Pay your billing amount to make orders.
        </p>
        <p className="a-desc">
        </p>
      </div>
    </div>
  );
};

export default StepSeven;
