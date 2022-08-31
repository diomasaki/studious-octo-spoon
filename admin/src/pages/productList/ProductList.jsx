import "./productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct, getProducts } from "../../redux/apiCalls";
import confirm, { Button, alert } from "react-alert-confirm";
import React from "react";
import "react-alert-confirm/dist/index.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    updateProduct(id, dispatch);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  function toggleModal2() {
    setIsOpen2(!isOpen2);
  }

  const columns = [
    {
      field: "_id",
      headerName: "Identifier",
      width: 300,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "product",
      headerName: "Product",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
      align: "center",
      headerAlign: "center",
    },
    {
      field: "inStock",
      headerName: "inStock",
      width: 300,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "price",
      headerName: "Price",
      width: 300,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "action",
      headerName: "Actions",
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <div className="App">
              <Button style={{ margin:"0px 10px" }} onClick={toggleModal}>Edit Info</Button>

              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
              >
                <div>
                  Edit Button Near This Info Will Edit This Product, To Edit
                  This Product Details Please Click The Edit Button Near This
                  Info
                </div>
                <Button onClick={toggleModal}>Close</Button>
              </Modal>
            </div>
            <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <div className="App">
              <Button onClick={toggleModal2}>Delete Info</Button>

              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModal2}
                contentLabel="My dialog"
              >
                <div>
                  Trash Icon Near This Info Will Delete This Product
                  Permanently, To Delete This Product Please Click The Trash
                  Icon Near This Info
                </div>
                <Button onClick={toggleModal2}>Close</Button>
              </Modal>
            </div>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
      align: "center",
      headerAlign: "center",
    },
  ];

  return (
    <div className="productList">
      <DataGrid
        rows={products}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={12}
      />
    </div>
  );
}
