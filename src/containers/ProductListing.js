import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productAction";
import ProductComponent from "./ProductComponent";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios.get(
      "https://mobilestg3.u.com.my/cms-message-mgt/messaging/ekyclistMessage?page=1&lang_id=1"
    );
    dispatch(setProducts(response?.data?.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="ui grid container">
      <div>
        {products?.categories?.map((product) => {
          return (
            <div key={product.id}>
            <p> {product.categoryName}</p>
            </div>
          );
        })}


{products?.list?.map((product) => {
          return (
            <div key={product.id}>
            <p> {product.code}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;
