import footer from "./images/map.png"
import styles from "./footer.module.css"
import logo from "../Navbar/images/lightlogo1.png"
import { NavLink } from "react-router-dom"

function Footer() {
  return (
    <footer className={`container-fluid d-flex justify-content-start align-items-center pt-5 ${styles.footerContainer}`} style={{background:"var(--blueColorDark)"}} id="footer">

    <img src={footer} style={{width:"100%"}} className={styles.imgFooter}/>
    

    <div className="d-flex  flex-wrap pt-5 ps-5 pb-5">


    <div className="d-flex flex-column my-4"  style={{color:"white",width:"200px"}} >
    <img src={logo} className={`mb-4 ${styles.imglogo}`}/>

    <p>
    "we provide the best selection of high-quality products and satisfying
          shopping experience."
    </p>
    </div>


    <div className="d-flex flex-column my-4 "  style={{color:"white",width:"200px"}} >
    <h5 className="mb-5">
    
        Help and Support
    </h5>
    <h6 className="my-2">
    <NavLink className="text-decoration-none text-white">
        
        Contact Us
    </NavLink>
    </h6>
    <h6 className="my-2">
 <NavLink className="text-decoration-none text-white">
        Support Ticket
    </NavLink>
    </h6>
    <h6 className="my-2">
 <NavLink className="text-decoration-none text-white">
        Term and condition
    </NavLink>
    </h6>
    </div>
    <div className="d-flex flex-column my-4"  style={{color:"white",width:"200px"}} >
    <h5 className="mb-5">
        Other Links
    </h5>
    <h6 className="my-2">
 <NavLink className="text-decoration-none text-white">
        Privacy Policy
    </NavLink>
    </h6>
    <h6 className="my-2">
 <NavLink className="text-decoration-none text-white">
        Refund Policy
    </NavLink>
    </h6>

    </div>



    
    </div>


    </footer>
  )
}

export default Footer