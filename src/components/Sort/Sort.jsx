import React, { useEffect, useState } from "react";
import { searchProducts } from "../../hooks/searchProducts";
import { orderFunc } from "../../hooks/orderFunc";
import { categoryFunc } from "../../hooks/categoryFunc";
import styles from "./sort.module.css"
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { getProductAction } from "../../Redux/Action/Action";

function Sort() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [category, setCategory] = useState("All");
  const [categoryTotal, setCategoryTotal] = useState("");

const dispatch=useDispatch()

//search 

  const handleSearch = async() => {
    setCategory("All");
    setSortOrder("asc")
    
const response=await searchProducts(searchQuery)
if(response){
  dispatch(getProductAction(response))
}
  };



  // Filter by Order
  const handleSortOrder = async(event) => {
    setCategory("All")
    setSearchQuery("")
   
      const sortOrder=event.target.value
      setSortOrder(event.target.value)
      const response=await orderFunc(sortOrder)
      if(response){
        dispatch(getProductAction(response))
      }
     
  };
    
  

  
// Filter by category

  const handleCategory = async(event) => {
    setSearchQuery("")
    setSortOrder("asc")
      const category=event.target.value
      setCategory(event.target.value)
    const response=await categoryFunc(category)
    if(response){
      dispatch(getProductAction(response))
    }
  };



// all products


  useEffect(()=>{
    const getcategory=async()=>{
      try{
        let response=await fetch('https://dummyjson.com/products?limit=20');
        response=await response.json();
       if(response){
           dispatch(getProductAction({response}))
       }

      }catch(error){
        console.error(error.message)
      }

    }
    getcategory()

  },[])



 //get all category name

  useEffect(() => {
    const getcategory = async () => {
      try {
      let response= await fetch("https://dummyjson.com/products/categories")
      response=await response.json()
      if(response){
        setCategoryTotal(response)
    }
    
} catch (error) {
        console.error(error.message);
      }
    };
    getcategory();
  },[]);
  
  



  return (
    <div className={styles.app}>
     
      <div className={`justify-content-center d-flex gap-2 ${styles.controls}`}>
      <div className={`position-relative ${styles.searchContainer}`}>

        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
          className={styles.search}
        />
        <IoIosSearch style={{fontSize:"1.4rem",color:"var(--mainColor)",cursor:"pointer",top:"50%",transform:"translateY(-50%)",right:"10px"}} className="position-absolute" onClick={()=>handleSearch()}/>

        
        </div>
        <select value={category} onChange={(event)=>handleCategory(event)} className={styles.select}>
          <option value="All" disabled>All Categories</option>
          {
            categoryTotal ? categoryTotal?.map((item,index)=>{
                return <option value={item?.name} key={index}>
                    {item?.name}
                </option>
            }):
            <option>
            nothing to show
            </option>
          }
        </select>
        <select value={sortOrder} onChange={(event)=>handleSortOrder(event)} className={styles.sort}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    
    </div>
  );
}

export default Sort;
