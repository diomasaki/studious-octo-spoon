import "./about.css";
import Award from "../../img/award.png"


const StepThree = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://i.ibb.co/55RZWH2/prd.png"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">3. Choose Product</h1>
        <p className="a-sub">
          Choose the product you want, swipe to see more.
        </p>
        <p className="a-desc">
        </p>
      </div>
    </div>
  );
};

export default StepThree;
