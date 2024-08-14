import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from "./pagination.module.css"
import { GrPrevious ,GrNext}from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { getProductAction } from '../../Redux/Action/Action';
import { orderFunc } from '../../hooks/orderFunc';




export default function PaginatedItems() {
  const [pageCount,setPageCount]=useState(Math.ceil(0))
const data=useSelector(state=>state.getProductReducer)
const dispatch=useDispatch()



const handlePageClick = async(event) => {
  const totalProducts=Number((event.selected)*20)

if(data?.sortOrder){
  const order=data?.sortOrder
  const response= await orderFunc(order,totalProducts)
  if(response){
    dispatch(getProductAction(response))
  }

}else{
  
  let response=await fetch(`https://dummyjson.com/products?limit=20&skip=${totalProducts}`);
  response=await response.json();
 if(response){
     dispatch(getProductAction({response}))
 }
}


  
};


useEffect(()=>{
  if(data?.response?.products?.length>0){
      setPageCount(Math.ceil(data?.response?.total / data?.response?.limit)) 
    }else{
      setPageCount(0)
    }

  },[data])

  return (
    <>

      
      <ReactPaginate
        breakLabel=". . ."
        nextLabel={<GrNext className={styles.npbutton}/>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount>1? pageCount:0}
        previousLabel={<GrPrevious className={styles.npbutton}/>}
        renderOnZeroPageCount={null}
        className={styles.mainContainerPagination}
      />
    </>
  );
}
