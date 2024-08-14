import styles from "./cardscreen.module.css"
import Card from "../Card/Card"
import { useSelector } from "react-redux"
function CardScreen() {
  const data=useSelector(state=>state.getProductReducer)



  return (
    <div className="d-flex justify-content-center align-items-center py-5 " id="products">

    <div className={` bg-light  ${styles.cardContainer} `} >
        {data?.response?.products?.length>0? data?.response?.products.map((item)=>{
          return <Card key={item?.id} Price={item?.price} Name={item?.title} Description={item?.description} Title={item?.brand} TitleDescription={item?.returnPolicy} id={item?.id} image={item?.images?.[0]}/>
        }): <h1 style={{color:"tomato"}}>Nothing found </h1>  }
        
          
    </div>
    </div>
  )
}

export default CardScreen