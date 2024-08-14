import styles from "./productdescriptioncomp.module.css";
import imagelazy from "/images/iconforlazy.png";
import { ImPriceTag } from "react-icons/im";
import { MdPolicy } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { IoBuildOutline } from "react-icons/io5";
import AddToCard from "../Buttons/AddToCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { idFunc } from "../../hooks/idFunc";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import LoaderComp from "../loader/Loader"

function ProductDescriptionComp() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        let response = await idFunc(id);
        if (response) {
          setData(response);
        }
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return (
      <div
        className={`container-fluid d-flex justify-content-center align-items-center p-3 ${styles.pdMainContainer}`}
        style={{height:"60vh",width:"100%"}}
      >
        <LoaderComp/>
      </div>
    );
  }
  const nodiscount = Number(data?.price + 30).toFixed(2);
  const pricenum = Number(data?.price).toFixed(2);
  const image = data?.images?.[0];

  return (
    <div
      className={`container-fluid d-flex justify-content-center align-items-center p-3 ${styles.pdMainContainer}`}
    >
      <div
        className={`d-flex justify-content-center align-items-center gap-5 flex-wrap ${styles.pdCenterMainContainer}`}
      >
        <div
          className={`d-flex justify-content-center align-items-center  p-3 ${styles.pdcImageContainer}`}
          style={{ height: "50vh" }}
        >
     
          <LazyLoadImage
            effect="blur"
            placeholderSrc={imagelazy}
            src={image} 
            style={{ width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",}} 

          />
        </div>

        <div
          className={`d-flex justify-content-center align-items-start flex-column p-3 ${styles.pdInfoMainContainer}  `}
        >
          <h1 style={{ fontWeight: "bold" }}>{data?.brand}</h1>
          <h5 style={{ fontWeight: "bold", color: "#f6b723" }}>
            {data?.title}{" "}
          </h5>
          <h3>
            <ImPriceTag style={{ color: "#f6b723" }} />{" "}
            <span
              style={{
                textDecoration: "line-through",
                color: "gray",
                fontSize: "1rem",
              }}
            >
              {`$ ${nodiscount}`}
            </span>
            <span
              style={{
                fontWeight: "bold",
                color: "#f6b723",
                paddingLeft: "1rem",
              }}
            >
              {`$ ${pricenum}`}
            </span>
          </h3>
          <h6>
            <BiCategory style={{ color: "#f6b723" }} /> {data?.category}
          </h6>
          <p className="pt-2">{data?.description}</p>
          <p>
            <MdPolicy style={{ color: "#f6b723" }} /> {data?.returnPolicy}
          </p>
          <p>
            <IoBuildOutline style={{ color: "#f6b723" }} />{" "}
            {data?.warrantyInformation}
          </p>
          <div className="d-flex justify-content-between gap-4">
            <AddToCard>BUY NOW</AddToCard>
            <AddToCard>ADD TO CART</AddToCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescriptionComp;
