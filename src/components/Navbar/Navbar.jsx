import styles from "./navbar.module.css"
import { IoIosSearch } from "react-icons/io";
import logo from "./images/shoplogo.png"
import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";
import { searchProducts } from "../../hooks/searchProducts";
import { useDispatch } from "react-redux";
import { getProductAction } from "../../Redux/Action/Action";


function Navbar() {
  const {id}=useParams()
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch=useDispatch()

  const handleSearch = async() => { 
const response=await searchProducts(searchQuery)
if(response){
  dispatch(getProductAction(response))
  window.location.hash="#products";
}
  };
 
  return (

   <nav className={`container-fluid d-flex justify-content-between p-4 align-items-center ${styles.mainContainer}`} >
    <img src={logo} className={styles.imglogo}/>
    <div className={`d-flex justify-content-between gap-4 align-item-center ${styles.menuContainer}`}>
    <NavLink to={"/"}>Home</NavLink>
    {id ?null :<NavLink onClick={()=>window.location.hash="#products"}>Products</NavLink>}
    <NavLink onClick={()=>window.location.hash="#footer"}>About</NavLink>
    </div>

  { id?null: <div className={`position-relative pe-4 ${styles.searchContainer}`} >
    <input type="text" placeholder="search products" className="ps-2 p-3" style={{border:"0px",outline:"0px",fontSize:"1rem"}} onChange={(e)=>setSearchQuery(e.target.value)}/>


    <div className="position-absolute  end-0 px-1" style={{top:"50%",transform:"translateY(-50%)",cursor:"pointer"}}>

    <IoIosSearch style={{fontSize:"1.4rem",color:"var(--mainColor)"}} onClick={()=>handleSearch()}/>
    </div>
  
    </div>}

   </nav>
  )
}

export default Navbar