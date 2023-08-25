import "./productList.css";
import Product from "../product/Product";
import { products } from "../../datas";

const ProductImage = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create Your Style & Inspire</h1>
        <p className="pl-desc">
          We sell a high quality product that you've been waiting for, its time
          for you to buy our clothes and have a good fit on it.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
