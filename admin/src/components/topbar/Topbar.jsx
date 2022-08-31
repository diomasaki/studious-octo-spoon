import React from "react";
import "./topbar.css";
import LogoutIcon from "@mui/icons-material/Logout";
import { persistor } from "../../redux/store";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";

export default function Topbar() {
  const user = useSelector((state) => state.user.currentUser);
  const handleClick = () => {
    persistor.purge();
    window.location.reload(false);
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">MASAKI&amp;CO Admin Panel</span>
        </div>
        <div className="topRight">
          {user ? (
            <div className="tp">
              <h3 style={{ fontWeight: "normal" }}>{user.username}</h3>
              <span>
                <Link to="/newproduct/">
                  <button
                    style={{
                      padding: "2px 7px",
                      marginTop: "3px",
                      fontSize: "15px",
                    }}
                    className="productListEdit"
                  >
                    Add Product
                  </button>
                </Link>
              </span>
              <Link to="/website">
                <DashboardIcon
                  style={{
                    marginTop: "2px",
                    color: "teal",
                    marginLeft: "10px",
                  }}
                />
              </Link>
              <button onClick={handleClick}>
                <LogoutIcon style={{ marginTop: "2px" }} />
              </button>
            </div>
          ) : (
            <Redirect to="/login" />
          )}
        </div>
      </div>
    </div>
  );
}
