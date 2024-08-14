import GetStartBtn from "../Buttons/GetStartBtn";
import welcomeimg from "./images/onlineshop1.svg";
import styles from "./welcome.module.css"
function Welcome() {
  const handleClick=()=>{
    window.location.hash="#products"
  }
  return (
    <div
      className="container-fluid d-flex position-relative mt-4 align-items-center"
      style={{  height: "70vh" }}
    >
      <img
        src={welcomeimg}
        className={`position-absolute end-0 ${styles.welcomeImg}`}
        style={{ height: "70vh", zIndex: "-1" }}
        
        

      />
      <div
        className={`container-fluid ps-5 ${styles.smallContainer} `}
       
      >
        <h1 style={{fontSize:"clamp(1.4rem,5vw,5rem)"}}>
        
          <span className="fw-bold" style={{ color: "#f9b20b" }}>
            START YOUR
          </span>
          <br />
          <span className="ps-5">SHOPING TODAY</span>
        </h1>
        <p className={styles.paragraphText}>
          "we provide the best selection of high-quality products and satisfying
          shopping experience."
        </p>

       <GetStartBtn click={handleClick}/>
      </div>
    </div>
  );
}

export default Welcome;
