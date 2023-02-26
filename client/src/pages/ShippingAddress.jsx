import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCredentials } from "../redux/apiCalls";

const Form = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20vh;
  text-align: center;
`;

const Input = styled.input`
  border-radius: 12px;
  border: none;
  flex: 1;
  min-width: 20%;
  padding: 10px;
  outline: 0;
`;

const Button = styled.button`
  border: none;
  outline: 0;
  padding: 15px 20px;
  background-color: transparent;
  color: teal;
  cursor: pointer;
  font-weight: 600;
`;

const Title = styled.h1`
  font-size: 30px;
  color: teal;
`;

const Duo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px 0px 0px;
  border: 2px solid teal;
  width: 500px;
`;

const ShippingAddress = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const adr = useSelector((state) => state.user.currentUser.address);
  const usr = useSelector((state) => state.user.currentUser.username);
  const eml = useSelector((state) => state.user.currentUser.email);
  const id = useSelector((state) => state.user.currentUser._id);
  const dispatch = useDispatch();
  const [err, setErr] = useState(false);
  const [err2, setErr2] = useState(false);
  const [err3, setErr3] = useState(false);
  const [err4, setErr4] = useState(false);

  const handleChange = (e) => {
    return { [e.target.name]: e.target.value.split(",") };
  };

  const handleClick = (type) => {
    if (type === "username") {
      if (username === "") {
        setErr(true);
      } else {
        updateCredentials(dispatch, id, type, username);
      }
    } else if (type === "email") {
      if (email === "") {
        setErr2(true);
      } else {
        updateCredentials(dispatch, id, type, usr, email);
      }
    } else if (type === "address") {
      if (address === "") {
        setErr4(true);
      } else {
        updateCredentials(dispatch, id, type, usr, eml, address);
      }
    } else if (type === "password") {
      if (password === "") {
        setErr3(true);
      } else {
        updateCredentials(dispatch, id, type, usr, eml, adr, password);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <Announcement />
      <Form>
        <Title>Shipping Address</Title>
        <Duo>
          <Input
            placeholder={adr}
            onChange={(e) => setAddress(e.target.value.split(","))}
          />
          <Button onClick={() => handleClick("address")}>Change Address</Button>
        </Duo>
        <Duo>
        <Input disabled={true}
            placeholder={"[Provinsi, Kecamatan, Alamat Rumah, Kode Pos]"}
            placeholderTextColor="#000"
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button style={{textDecoration:"none", cursor:"default", color:"black"}} >Address Detail Example</Button>
        </Duo>
        {err ? (
          <span style={{ marginTop: "10px", color: "red" }}>
            Empty Address !
          </span>
        ) : (
          <></>
        )}
      </Form>
    </div>
  );
};

export default ShippingAddress;
