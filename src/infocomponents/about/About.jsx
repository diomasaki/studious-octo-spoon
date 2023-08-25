import "./about.css";
import Award from "../../img/award.png"


const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://i.ibb.co/XSBKNLp/reg.png"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">1. Create Account</h1>
        <p className="a-sub">
          Create Account To Start Shopping.
        </p>
        <p className="a-desc">
        </p>
      </div>
    </div>
  );
};

export default About;
