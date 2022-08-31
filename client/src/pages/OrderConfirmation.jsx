import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkCurrentPassword,
  getUserOrders,
} from "../redux/apiCalls";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";

const Button = styled.button`
  border: none;
  outline: 0;
  padding: 15px 20px;
  background-color: transparent;
  color: teal;
  cursor: pointer;
  font-weight: 600;
`;

const Duo = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid teal;
  margin-right: 1%;
  width: 500px;
`;

const Input = styled.input`
  border-radius: 12px;
  border: none;
  flex: 1;
  min-width: 20%;
  padding: 10px;
  outline: 0;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 30vh;
  text-align: center;
`;

const OrderConfirmation = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const cart = useSelector((state) => state.cart);
  const id = useSelector((state) => state.user.currentUser._id);
  const confirmedPass = useSelector((state) => state.user.confirmedPassword);
  const history = useHistory();

  const dispatch = useDispatch();

  const handleClick = () => {
    checkCurrentPassword(dispatch, id, currentPassword);
  };

  const handleClickOrder = (e) => {
    e.preventDefault();
    history.push("/payconfirmation", {});
  };

  return (
    <>
      <Navbar />
      <Announcement />
      <Form>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "fit-content",
          }}
        >
          <Duo>
            <Input
              placeholder="Masukkan Password Jika Ingin Merubah Alamat"
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <Button onClick={() => handleClick()}>
              Change Shipping Address
            </Button>
          </Duo>
          {confirmedPass === null ? (
            <></>
          ) : confirmedPass === true ? (
            <Redirect to="/profile/shippingaddress" />
          ) : (
            <span color="black">Wrong Password</span>
          )}
        </div>
        {cart.total !== 0 ?
        <Link to="/payconfirmation" style={{ margin: "0.5% 0%" }}>
          <Button onClick={handleClickOrder}>Confirm Orders</Button></Link> : <Button style={{marginBottom: "20px"}}>EMPTY BAG</Button>}
        
      </Form>
    </>
  );
};

export default OrderConfirmation;
