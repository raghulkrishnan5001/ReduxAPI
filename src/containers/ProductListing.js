import React, { useEffect, useCallback, useMemo, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productAction";
import ProductDetails from "./ProductDetails";
import { Link } from "react-router-dom";
import {useQuery, usePaginatedQuery} from "react-query"
import ReactPaginate from "react-paginate"





const ProductPage = () => {


  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async (page) => {
    const response = await axios.get(
     ` https://mobilestg3.u.com.my/cms-message-mgt/messaging/ekyclistMessage?page=${page}&lang_id=1`
    );
    // setPosts(response.data.data);
    console.log(response?.data?.data);
    dispatch(setProducts(response?.data?.data));

  };

  useEffect(() => {
    fetchProducts("1");
  }, []);


  return (
    <div className="ui grid container">
       <div>
        <h1>product container</h1>
        {products?.categories?.map((product) => {
          return (
            <div key={product.id}>
            <p> {product.categoryName}</p>
            </div>
          );
        })}
    <h1>Product List</h1>

{products?.list?.map((product) => {
          return (
            <div class="card" key={product.id}>
            <p> {product.code}</p>
            </div>
          );
        })}
      </div>
      <button onClick={ ( ) => {
        fetchProducts("1") } }>Page 1</button>    
      <button onClick={ ( ) => {
        fetchProducts("2") } }>Page 2</button> 
     
    </div>
  );
};

export default ProductPage;
