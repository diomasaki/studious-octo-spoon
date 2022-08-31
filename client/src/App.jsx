import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import NwSuccess from "./pages/NwSuccess";
import { useSelector } from "react-redux";
import Security from "./pages/Security";
import Orders from "./pages/Orders";
import BankTransfer from "./pages/NewProduct/BankTransfer";
import SuccessTf from "./pages/SuccessTf";
import OrderConfirmation from "./pages/OrderConfirmation";
import ShippingAddress from "./pages/ShippingAddress";
import ShippingScreen from "./pages/Shipping/ShippingScreen";
import About from "./infocomponents/about/About";
import Intro from "./infocomponents/intro/Intro";
import ProductImage from "./infocomponents/productList/ProductList";
import StepTwo from "./infocomponents/about2/StepTwo";
import StepThree from "./infocomponents/about3/StepThree";
import StepFour from "./infocomponents/about4/StepFour";
import StepFive from "./infocomponents/about5/StepFive";
import StepSix from "./infocomponents/about6/StepSix";
import StepSeven from "./infocomponents/about7/StepSeven";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  const confirmedPass = useSelector((state) => state.user.confirmedPassword);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home type="normal" />
        </Route>
        <Route exact path="/adminpanel">
          {() => {
            window.location.replace("http://localhost:3001");
            return null;
          }}
        </Route>
        <Route path="/men">
          <Home type="men" />
        </Route>
        <Route path="/women">
          <Home type="women" />
        </Route>
        <Route exact path="/profile">
          {user ? <Profile /> : <Redirect to="/login" />}
        </Route>
        <Route path="/profile/securitysettings">
          {user ? (
            confirmedPass ? (
              <Security />
            ) : (
              <Redirect to="/profile" />
            )
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/profile/shippingaddress">
          {user ? (
            confirmedPass ? (
              <ShippingAddress />
            ) : (
              <Redirect to="/orderconfirmation" />
            )
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/profile/orders">
          {user ? <Orders /> : <Redirect to="/login" />}
        </Route>
        <Route path="/orderconfirmation">
          {user ? <OrderConfirmation /> : <Redirect to="/login" />}
        </Route>
        <Route path="/newsletterregister">
          {user ? <NwSuccess /> : <Redirect to="/login" />}
        </Route>
        <Route path="/cart">{user ? <Cart /> : <Redirect to="/login" />}</Route>
        <Route path="/wishlist">
          {user ? <Wishlist /> : <Redirect to="/login" />}
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/payconfirmation">
          <BankTransfer />
        </Route>
        <Route path="/shippingdetails">
          <ShippingScreen />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/success">
          {user ? <Success /> : <Redirect to="/" />}
        </Route>
        <Route path="/ordersuccessfull">
          {user ? <SuccessTf /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path to="information">
          <Intro />
          <About />
          <StepTwo />
          <StepThree />
          <StepFour />
          <StepFive />
          <StepSix />
          <StepSeven />
          <ProductImage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
