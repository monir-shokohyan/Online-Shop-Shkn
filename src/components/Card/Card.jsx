import React from 'react'
import styles from "./card.module.css"
import { useNavigate } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import lazyimage from "/images/iconforlazy.png"



function Card({Price,Name,Description,Title,TitleDescription,id,image}) {
  const navigate=useNavigate()
  const handleCartclick=async()=>{
    if(id){

   
     navigate(`product/${id}`)
      
    }
  }

  const handleAdd=(e)=>{
    e.stopPropagation()

  }
  return (
<div className={styles.card} onClick={()=>handleCartclick()} title='Click for more info .'>
 <div className={styles.card_image}>
 {/* <img src={image} style={{height:"100%",width:"100%", objectFit:"contain"}}/> */}
 <LazyLoadImage placeholderSrc={lazyimage} src={image} style={{objectFit:"contain"}} height={"100%"} width={"100%"} effect='blur' />

 </div>
  <div className={styles.card_price_tag}>
    <span className={styles.price_value}>{`${Price} $`}</span>
  </div>
  <svg
    textRendering="geometricPrecision"
    shapeRendering="geometricPrecision"
    height="50"
    width="50"
    viewBox="0 0 200 350"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.ring_1}
  >
    <defs>
      <radialGradient
        gradientTransform="matrix(1 0 0 0.860612 0.5 0.618787)"
        gradientUnits="objectBoundingBox"
        spreadMethod="pad"
        r="0.5"
        cy="0"
        cx="0"
        id="ebT4AgJ0WZ62-fill"
      >
        <stop
          stopColor="#313131"
          offset="48.4041%"
          id="ebT4AgJ0WZ62-fill-0"
        ></stop>
        <stop
          stopColor="#a5a5a5"
          offset="68.1857%"
          id="ebT4AgJ0WZ62-fill-1"
        ></stop>
        <stop
          stopColor="#282828"
          offset="84.0109%"
          id="ebT4AgJ0WZ62-fill-2"
        ></stop>
      </radialGradient>
      <radialGradient
        gradientTransform="matrix(0.999964 0.008506 -0.012489 1.468176 0.496001 0)"
        gradientUnits="objectBoundingBox"
        spreadMethod="pad"
        r="0.803687"
        cy="0"
        cx="0"
        id="ebT4AgJ0WZ63-fill"
      >
        <stop
          stopColor="#313131"
          offset="66.5167%"
          id="ebT4AgJ0WZ63-fill-0"
        ></stop>
        <stop
          stopColor="#929292"
          offset="79.3157%"
          id="ebT4AgJ0WZ63-fill-1"
        ></stop>
        <stop
          stopColor="#282828"
          offset="100%"
          id="ebT4AgJ0WZ63-fill-2"
        ></stop>
      </radialGradient>
    </defs>
    <path
      fill="url(#ebT4AgJ0WZ62-fill)"
      transform="translate(.79738 0.07381)"
      d="M52.80126,148.52946c0-54.09424,43.1045-97.44452,97.19874-97.44452c54.02838,0,97.83949,43.74533,97.9461,97.74875c0,4.48899-15.841036,8.59818-21.21294,3.870883-.611021-2.50634-.402559-3.828048,0-4.910803c7.308634-19.657872-34.28954-75.61349-76.73315-75.61349s-76.85095,34.40734-76.85095,76.85095s27.897301,76.44983,70.340911,76.44983c1.832594,0,10.881874-3.528414,14.410289,0c4.397368,5.041913,5.519605,8.849302,4.757083,12.041874-.919128,3.848258-1.140559,6.87447-4.632193,9.130546-2.6467.21463-5.32315.32404-8.02514.32404-54.09424,0-97.19874-44.35382-97.19874-98.44806h-.00001Z"
    ></path>
    <path
      fill="url(#ebT4AgJ0WZ63-fill)"
      transform="matrix(1 0 0-1-20.148641 311.37469)"
      d="M268.094741,163.50711c0,54.09424-43.068431,97.94629-97.162671,97.94629s-97.94629-43.85205-97.94629-97.94629m9.892327,0c0,42.44361,45.610353,76.85095,88.053963,76.85095s97.162671-34.40734,97.162671-76.85095"
    ></path>
  </svg>
  <svg
    textRendering="geometricPrecision"
    shapeRendering="geometricPrecision"
    height="45"
    width="45"
    viewBox="0 0 200 350"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.ring_2}
  >
    <defs>
      <radialGradient
        gradientTransform="matrix(1 0 0 0.860612 0.5 0.618787)"
        gradientUnits="objectBoundingBox"
        spreadMethod="pad"
        r="0.5"
        cy="0"
        cx="0"
        id="ebT4AgJ0WZ62-fill"
      >
        <stop
          stopColor="#313131"
          offset="48.4041%"
          id="ebT4AgJ0WZ62-fill-0"
        ></stop>
        <stop
          stopColor="#a5a5a5"
          offset="68.1857%"
          id="ebT4AgJ0WZ62-fill-1"
        ></stop>
        <stop
          stopColor="#282828"
          offset="84.0109%"
          id="ebT4AgJ0WZ62-fill-2"
        ></stop>
      </radialGradient>
      <radialGradient
        gradientTransform="matrix(0.999964 0.008506 -0.012489 1.468176 0.496001 0)"
        gradientUnits="objectBoundingBox"
        spreadMethod="pad"
        r="0.803687"
        cy="0"
        cx="0"
        id="ebT4AgJ0WZ63-fill"
      >
        <stop
          stopColor="#313131"
          offset="66.5167%"
          id="ebT4AgJ0WZ63-fill-0"
        ></stop>
        <stop
          stopColor="#929292"
          offset="79.3157%"
          id="ebT4AgJ0WZ63-fill-1"
        ></stop>
        <stop
          stopColor="#282828"
          offset="100%"
          id="ebT4AgJ0WZ63-fill-2"
        ></stop>
      </radialGradient>
    </defs>
    <path
      fill="url(#ebT4AgJ0WZ62-fill)"
      transform="translate(.79738 0.07381)"
      d="M52.80126,148.52946c0-54.09424,43.1045-97.44452,97.19874-97.44452c54.02838,0,97.83949,43.74533,97.9461,97.74875c0,4.48899-15.841036,8.59818-21.21294,3.870883-.611021-2.50634-.402559-3.828048,0-4.910803c7.308634-19.657872-34.28954-75.61349-76.73315-75.61349s-76.85095,34.40734-76.85095,76.85095s27.897301,76.44983,70.340911,76.44983c1.832594,0,10.881874-3.528414,14.410289,0c4.397368,5.041913,5.519605,8.849302,4.757083,12.041874-.919128,3.848258-1.140559,6.87447-4.632193,9.130546-2.6467.21463-5.32315.32404-8.02514.32404-54.09424,0-97.19874-44.35382-97.19874-98.44806h-.00001Z"
    ></path>
    <path
      fill="url(#ebT4AgJ0WZ63-fill)"
      transform="matrix(1 0 0-1-20.148641 311.37469)"
      d="M268.094741,163.50711c0,54.09424-43.068431,97.94629-97.162671,97.94629s-97.94629-43.85205-97.94629-97.94629m9.892327,0c0,42.44361,45.610353,76.85095,88.053963,76.85095s97.162671-34.40734,97.162671-76.85095"
    ></path>
  </svg>
  <svg
    textRendering="geometricPrecision"
    shapeRendering="geometricPrecision"
    height="50"
    width="50"
    viewBox="0 0 200 300"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.ring_3}
  >
    <defs>
      <radialGradient
        gradientTransform="matrix(1 0 0 0.860612 0.5 0.618787)"
        gradientUnits="objectBoundingBox"
        spreadMethod="pad"
        r="0.5"
        cy="0"
        cx="0"
        id="ebT4AgJ0WZ62-fill"
      >
        <stop
          stopColor="#313131"
          offset="48.4041%"
          id="ebT4AgJ0WZ62-fill-0"
        ></stop>
        <stop
          stopColor="#a5a5a5"
          offset="68.1857%"
          id="ebT4AgJ0WZ62-fill-1"
        ></stop>
        <stop
          stopColor="#282828"
          offset="84.0109%"
          id="ebT4AgJ0WZ62-fill-2"
        ></stop>
      </radialGradient>
      <radialGradient
        gradientTransform="matrix(0.999964 0.008506 -0.012489 1.468176 0.496001 0)"
        gradientUnits="objectBoundingBox"
        spreadMethod="pad"
        r="0.803687"
        cy="0"
        cx="0"
        id="ebT4AgJ0WZ63-fill"
      >
        <stop
          stopColor="#313131"
          offset="66.5167%"
          id="ebT4AgJ0WZ63-fill-0"
        ></stop>
        <stop
          stopColor="#929292"
          offset="79.3157%"
          id="ebT4AgJ0WZ63-fill-1"
        ></stop>
        <stop
          stopColor="#282828"
          offset="100%"
          id="ebT4AgJ0WZ63-fill-2"
        ></stop>
      </radialGradient>
    </defs>
    <path
      fill="url(#ebT4AgJ0WZ62-fill)"
      transform="translate(.79738 0.07381)"
      d="M52.80126,148.52946c0-54.09424,43.1045-97.44452,97.19874-97.44452c54.02838,0,97.83949,43.74533,97.9461,97.74875c0,4.48899-15.841036,8.59818-21.21294,3.870883-.611021-2.50634-.402559-3.828048,0-4.910803c7.308634-19.657872-34.28954-75.61349-76.73315-75.61349s-76.85095,34.40734-76.85095,76.85095s27.897301,76.44983,70.340911,76.44983c1.832594,0,10.881874-3.528414,14.410289,0c4.397368,5.041913,5.519605,8.849302,4.757083,12.041874-.919128,3.848258-1.140559,6.87447-4.632193,9.130546-2.6467.21463-5.32315.32404-8.02514.32404-54.09424,0-97.19874-44.35382-97.19874-98.44806h-.00001Z"
    ></path>
    <path
      fill="url(#ebT4AgJ0WZ63-fill)"
      transform="matrix(1 0 0-1-20.148641 311.37469)"
      d="M268.094741,163.50711c0,54.09424-43.068431,97.94629-97.162671,97.94629s-97.94629-43.85205-97.94629-97.94629m9.892327,0c0,42.44361,45.610353,76.85095,88.053963,76.85095s97.162671-34.40734,97.162671-76.85095"
    ></path>
  </svg>
  <div className={styles.card_info}>
    <div className={styles.left_info}>
      <span className={styles.product_title}
        >{Name}
        <p>{Description?.length > 40 ? Description.slice(0, 40) + '...' : Description}</p>

        <div className={styles.star_rating}>
          <span className={styles.star}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              fill="currentColor"
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
              ></path>
            </svg>
          </span>
          <span className={styles.star}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              fill="currentColor"
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
              ></path>
            </svg>
          </span>
          <span className={styles.star}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              fill="currentColor"
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
              ></path>
            </svg>
          </span>
          <span className={styles.star}>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              fill="currentColor"
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
              ></path>
            </svg>
          </span>
          <span className={styles.star}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              fill="currentColor"
              className="bi bi-star"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"
              ></path>
            </svg>
          </span>
        </div>
      </span>
    </div>
    <div className={styles.right_info}>
      <ul className={styles.features_list}>
        <li className={styles.list_item}>
          <p className={styles.feature_sub_title}>{Title}</p>
          <span className={styles.feature_desc}>{TitleDescription}</span>
        </li>
       
      </ul>
    </div>
  </div>
  <div className={styles.add_to_cart_btn} onClick={(e)=>handleAdd(e)} title='add to cart .'>
    <button>Add to cart</button>
  </div>
</div>


  )
}

export default Card