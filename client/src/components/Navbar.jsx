import { Badge } from "@material-ui/core";
import { InfoOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { persistor } from "../redux/store";
import { FlagIcon } from "react-flag-kit";
import LogoutIcon from "@mui/icons-material/Logout";
import { unconfirmPassword } from "../redux/apiCalls";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SecurityIcon from "@mui/icons-material/Security";
import styles from "../styles/Navbar.module.css";
import { useState } from "react";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
  margin-right: 120px;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.button`
  background-color: white;
  outline: none;
  border: none;
  font-size: 14px;
  cursor: pointer;
  margin-left: 15px;
  padding: 0;
  color: black;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const quantity = useSelector((state) => state.cart.quantity);
  const quantity2 = useSelector((state) => state.wishlist.quantity);
  const user = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();
  const unconfirmPass = () => {
    unconfirmPassword(dispatch);
  };

  const handleClick = () => {
    persistor.purge();
    window.location.reload(false);
  };

  return (
    <div className={styles.container}>
      <Container>
        <Wrapper>
          <div className={styles.responsivenavbar}>
            <Left>
              <Language>
                <FlagIcon
                  code="ID"
                  size={30}
                  style={{ paddingTop: "5px", width: "20px" }}
                />
              </Language>
              <Link to="/cart">
                <MenuItem>
                  <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartOutlined />
                  </Badge>
                </MenuItem>
              </Link>
              <Link to="/wishlist">
                <MenuItem>
                  <Badge badgeContent={quantity2} color="primary">
                    |{" "}
                    <FavoriteBorderIcon
                      style={{ marginTop: "-3px", padding: "0px 4px" }}
                    />{" "}
                  </Badge>
                  <text style={{ marginTop: "-3px", padding: "0px 16px" }}>
                    WISHLIST
                  </text>
                </MenuItem>
              </Link>
              <Link to="/information">
                <MenuItem>
                  <Badge>
                    |
                    <InfoOutlined
                      style={{ marginTop: "-3px", padding: "0px 4px" }}
                    />
                  </Badge>
                  <text>INFO</text>
                </MenuItem>
              </Link>
            </Left>
          </div>
          <div className="container">
            <Center>
              <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                <Logo>MASAKI&amp;CO</Logo>
              </Link>
            </Center>
          </div>
          <div className="responsivenavbar">
            {user ? (
              user.isAdmin ? (
                <Right>
                  <Link
                    to="/profile"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <div className={styles.responsivenavbar}>
                      <button
                        onClick={() => unconfirmPass()}
                        style={{
                          fontWeight: "normal",
                          marginLeft: "-20%",
                          backgroundColor: "transparent",
                          border: "none",
                          outline: "none",
                          fontSize: "15px",
                          cursor: "pointer",
                        }}
                      >
                        MANAGE ACCOUNT
                      </button>
                    </div>
                  </Link>
                  <Link to="/adminpanel">
                    <div className={styles.responsivenavbar}>
                      <SecurityIcon
                        style={{
                          width: "20px",
                          marginTop: "2px",
                          color: "black",
                        }}
                      />
                    </div>
                  </Link>
                  <Link to="/login">
                    <div className={styles.responsivenavbar}>
                      <MenuItem
                        onClick={handleClick}
                        style={{
                          color: "black",
                          textDecoration: "none",
                          marginTop: "2px",
                        }}
                      >
                        LOGOUT
                      </MenuItem>
                    </div>
                  </Link>
                </Right>
              ) : (
                <Right>
                  <Link
                    to="/profile"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <button
                      onClick={() => unconfirmPass()}
                      style={{
                        fontWeight: "normal",
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                        fontSize: "15px",
                        cursor: "pointer",
                      }}
                    >
                      MANAGE ACCOUNT
                    </button>
                  </Link>
                  <Link to="/login">
                    <MenuItem
                      onClick={handleClick}
                      style={{
                        color: "black",
                        textDecoration: "none",
                        marginTop: "2px",
                      }}
                    >
                      LOGOUT
                    </MenuItem>
                  </Link>
                </Right>
              )
            ) : (
              <Right>
                <Link
                  to="/register"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <div className={styles.responsivenavbar}>
                    <MenuItem>REGISTER</MenuItem>
                  </div>
                </Link>
                <Link
                  to="/login"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <div className={styles.responsivenavbar}>
                    <MenuItem>SIGN IN</MenuItem>
                  </div>
                </Link>
              </Right>
            )}
            <div className={styles.hamburger} onClick={() => setOpen(!open)}>
              <span className={styles.line} />
              <span className={styles.line} />
              <span className={styles.line} />
            </div>
            <ul
              onClick={() => setOpen(false)}
              className={styles.menu}
              style={{ right: open ? "0px" : "-50vw" }}
            >
              <li className={styles.menuItem}>
                <Link style={{ textDecoration: "none", color: "white" }} to="/cart">
                  <li className={styles.menuItem}>CART</li>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/wishlist"
                >
                  <li className={styles.menuItem}>WISHLIST</li>
                </Link>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/information"
                >
                  <li className={styles.menuItem}>INFO</li>
                </Link>
              </li>
            </ul>
          </div>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
