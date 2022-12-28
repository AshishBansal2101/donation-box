import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard.js";
// import needy from "./needy.js";
import newProduct from "../Admin/NewProduct.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="donationBox" />
          <div className="banner">
            <p>Welcome to Donation-Box</p>
            <h1>Services Below</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>
          <h2 className="homeHeading">Featured Services</h2>

          <div className="container" id="container">
            {/* {products &&
              products.map((product) => <ProductCard product={product} />)} */}
            <Link to="/admin/product">want donation</Link>
            <Link to="/shipping">give donation</Link>
            <Link to="/softbook">softbook</Link>
            <Link to="/wantbook">Want Hard Book </Link>
            <Link to="/givebook">Donate Hard Book</Link>
            {/* <div className="serviceblock">give donation</div>
            <div className="serviceblock">upload book soft</div>
            <div className="serviceblock">donate book hard</div> */}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
