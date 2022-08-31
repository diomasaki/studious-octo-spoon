import "./transactions.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, getOrders, getProducts, updateOrder, updatePaid, updateDlvr } from "../../redux/apiCalls";
import { useEffect } from "react";

export default function Transactions() {

  const dispatch = useDispatch();

  const orders = useSelector((state) => state.order.orders);
  const users = useSelector((state) => state.user.users);
  const products = useSelector((state) => state.product.products);
  
  useEffect(() => {
    getUsers(dispatch);
    getProducts(dispatch);
    getOrders(dispatch);
  }, [dispatch]);

  const handleOrderClick = (id, stt) => {
    updateOrder(id, stt, dispatch);
  };

  const handlePaidClick = (id, kok) => {
    updatePaid(id, kok, dispatch);
  };

  const handleDlvrClick = (id, wkk) => {
    updateDlvr(id, wkk, dispatch);
  };

  return (
    <div className="container">
      <div className="container2">
      <div className="bar" >
        <span>User</span>
        <span>Products &amp; Quantities</span>
        <span>Total</span>
        <span>Address</span>
        <span>Shipping Status</span>
        <span>Payment Status</span>
        <span>Package Status</span>
      </div>
      <div >
      {orders.map((order) => {
        for (let i=0; i < orders.length; i++) {
          let op = order.products
          return (
            <div>
            <div className="bar2">
              <span>
              {(() => {
                const usIndex = users.findIndex((user) => user._id === order.userId);
                return users[usIndex].username
              })()}
              </span>
              <span>{(() => {
                const options = [];
                for (let i=0; i < op.length; i++) {
                  options.push(<span>{op[i].productId} : {op[i].quantity}<br/></span>);
                }
                return options;
              })()}</span>
              <span>$ {order.amount}</span>
              <span>{order.address}</span>
              <span>
                {order.status}
                <button className="btn" onClick={()=>handleOrderClick(order._id, order.status)}>Change Order Status</button>
              </span>
              <span>
                {order.onStatus}
                <button className="btn2" onClick={()=>handlePaidClick(order._id, order.onStatus)}>Change Order Status</button>
              </span>
              <span>
                {order.statusT}
                <button className="btn2" onClick={()=>handleDlvrClick(order._id, order.statusT)}>Change Order Status</button>
              </span>
            </div>
            <hr/>
            </div>
          )
        }
      })}
      </div>    
      </div> 
    </div>
  )
}
