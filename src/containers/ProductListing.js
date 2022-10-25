import React, { useEffect, useCallback, useMemo, useState } from "react";
import axios from "axios";
import './product.scss'
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productAction";
import ProductDetails from "./ProductDetails";
import { Link } from "react-router-dom";
import {useQuery, usePaginatedQuery} from "react-query"
import ReactPaginate from "react-paginate"
// import { useLang } from "hooks/useLang";




const ProductPage = () => {


  const [page ,setPage] = useState(1)

  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async (pages) => {
    // Boolean(pages) && setPage(pages);
    const response = await axios.get(
     ` https://mobilestg3.u.com.my/cms-message-mgt/messaging/ekyclistMessage?page=${page}&lang_id=1`
    );
    // setPosts(response.data.data);
    console.log(response?.data?.data?.pageMeta,"------------------");
    dispatch(setProducts(response?.data?.data));

  };

  useEffect(() => {
    fetchProducts();
  }, [page]);


  const handlePageChange = (page) => {
setPage(page) 
 };

//  const { Labels } = useLang();

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
             {/* <p> {product.AppErrorCode}</p> */}
            </div>
          );
        })}
      </div>

<div className="ml-auto">
      <ReactPaginate
              disableInitialCallback={true}
              previousLabel={"previous"}
              nextLabel="Next"
              breakLabel={<span>...</span>}
              // breakClassName="me-2 my-auto"
              pageCount={products?.pageMeta?.totalPages}
              pageRangeDisplayed={1}
              onPageChange={(e) => {
                console.log(e,"------------");
                handlePageChange(e.selected + 1)
              }}
              containerClassName="pagination custom-pagination"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              activeClassName="active"
              previousClassName="page-item"
              nextClassName="page-item"
              previousLinkClassName="page-link"
              nextLinkClassName="page-link"
              disabledClassName={"disabled"}
              forcePage={page - 1}
            />
            
      </div>

      
      {/* <button onClick={ ( ) => {
        fetchProducts(Number(page)-1) } }>Previous</button>    
      <button onClick={ ( ) => {
        
        fetchProducts(Number(page)+1) } }>Next</button>  */}
     
    </div>
  );
};

export default ProductPage;
