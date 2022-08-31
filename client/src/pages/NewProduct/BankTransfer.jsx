import { useState } from "react";
import "./bankTransfer.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addReceipt } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Announcement from "../../components/Announcement";
import Navbar from "../../components/Navbar";

const SummaryItem = styled.div`
  height: fit-content;
  padding-bottom: -10%;
  width: 30%;
  margin: -1% auto;
  border: none;
  color: #000000;
  border-radius: 2px;
  border: 2px solid black;
  font-weight: 300;
`;
const SummaryItemText = styled.div`
  margin-left: 20px;
  font-size: 35px;
`;
const SummaryItemPrice = styled.div``;

const Text = styled.div`
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 20%;
`;

export default function NewProduct() {
  const cart = useSelector((state) => state.cart);
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleClick = (e) => {
    e.preventDefault();

    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const receipt = { ...inputs, img: downloadURL };
          addReceipt(dispatch, receipt);
          history.push("/ordersuccessfull", {});
        });
      }
    );
  };

  return (
    <>
      <Navbar />
      <Announcement/>
      <div className="newProduct">
        <SummaryItem>
          <SummaryItemText>YOUR TOTAL</SummaryItemText>
          <SummaryItemText>${cart.total}</SummaryItemText>
        </SummaryItem>
        <form className="addProductForm">
          <div className="addProductItem">
            <label>Bukti Transfer</label>
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className="addProductItem">
            <label>Nama Rekening</label>
            <input
              name="title"
              type="text"
              placeholder="Nama Rekening Anda"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Bank</label>
            <input
              name="desc"
              type="text"
              placeholder="Bank Anda"
              onChange={handleChange}
            />
          </div>
          <button onClick={handleClick} className="addProductButton">
            Create
          </button>
          <Text style={{ marginLeft: "10px", marginTop: "20px" }}>
            <Payment
              style={{ marginRight: "10px" }}
              src="https://i.ibb.co/syQjBZm/output-onlinepngtools-1.png"
            ></Payment>
            BCA DIO MASAKI WAHYU 5771124683
          </Text>
          <Text style={{ marginLeft: "13px", marginTop: "-20px" }}>
            <Payment
              style={{ marginRight: "10px" }}
              src="https://i.ibb.co/pQvG2M5/output-onlinepngtools-3.png"
            ></Payment>
            BRI DIO MASAKI WAHYU 2953328473
          </Text>
        </form>
      </div>
    </>
  );
}
