import React, { useEffect, useState, useRef } from 'react'
import { useParams, Link } from "react-router-dom"
import axios from "axios";
import "../styles/ProductDetails.css"
import BarChart from '../components/functionalComponent/BarChart';
import CircularProgressBar from '../components/functionalComponent/CircularProgressBar';
import ProgressBar from '../components/functionalComponent/ProgressBar/ProgressBar';
import ProgressBarOne from '../components/functionalComponent/ProgressBar/ProgressBarOne';

const baseURL = `http://localhost:8080`

const ProductDetails = () => {
  const { productId } = useParams();
  const [data, setData] = useState();
  const [openAvailableOffers, setOpenAvailableOffers] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [pinCode, setPinCode] = useState();
  const pinCodeRef = useRef();
  const ratings = [
    { rating: 5, number: 45},
    { rating: 4, number: 72},
    { rating: 3, number: 42},
    { rating: 2, number: 35},
    { rating: 1, number: 15}
  ]

  const fetchProductData = async () => {
    try {
      let res = await axios.get(`${baseURL}/products/${productId}`);
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log("Error fetching Product Data", error)
    }
  }

  useEffect(() => {
    fetchProductData();
  }, [])
  console.log(productId);
  return (
    <div className='productDetails_container'>
      <div className='productDetails_product'>
        <div className='productDetails_imageContainer'>
          <div className='productDetails_image'>
            <img src={data?.image} alt="" />
          </div>
          <div className='productDetails_imageButtons'>
            <button><i class="fa-solid fa-cart-shopping" style={{color: "#dddfe4"}}></i>&nbsp;&nbsp;Add To Cart</button>
            <button><i class="fa-solid fa-bolt-lightning" style={{color: "#dddfe4"}}></i>&nbsp;&nbsp;Buy Now</button>
          </div>
        </div>
        <div className='productDetails_detailsContainer'>
          <div className='productDetails_breadCrumb'>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to="/products">Products</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{data?.title.slice(0, 50)}</li>
              </ol>
            </nav>
          </div>
          <div className='productDetails_heading'>
            <h3>{data?.title.slice(0, 30)}</h3>
          </div>
          <div className='productDetails_ratings'>
            <p className='productDetails_ratings_value'>{data?.rating}<i class="fa-solid fa-star" style={{ color: "white", fontSize: "0.75rem" }}></i></p>
            <span style={{ opacity: "0.5" }}>383 Ratings & 21 Reviews</span>
          </div>
          <div className='productDetails_price'>
            <div><p className='productDetails_price_head'>Special Price</p></div>
            <div className='productDetails_price_body'>
              <h4 className='productDetails_price_price'>₹{data?.price}</h4>
              <p className='productDetails_price_MRP'>₹{data?.MRP}</p>
              <span className='productDetails_price_offer'>{Math.floor(((data?.MRP - data?.price) / data?.MRP) * 100)}% off</span>
            </div>
          </div>
          <div className='productDetails_coupons'>
            <div className='productDetails_coupons_heading'>
              <h6>Coupons for you</h6>
            </div>
            <div className='productDetails_coupons_body'>
              <div className='productDetails_coupons_body_line'>
                <img src="https://rukminim2.flixcart.com/www/36/36/promos/30/07/2019/79f48e86-8a93-46ab-b45a-5a12df491941.png?q=90" width="20" alt="" />
                <h6>Partner Offer</h6>
                <span>Buy this product & get upto 30% off</span>
                <span style={{ color: "blue", fontWeight: "500" }}>T&C</span>
              </div>
            </div>
          </div>
          <div className='productDetails_offers'>
            <div className='productDetails_coupons_heading'>
              <h6>Available Offers</h6>
            </div>
            <div className='productDetails_coupons_body'>
              <div className='productDetails_coupons_body_line'>
                <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="20" alt="" />
                <h6>Bank Offer</h6>
                <span>10% off on Kotak Bank Credit Card, up to ₹1250 on orders of ₹5,000 and above</span>
                <span style={{ color: "blue", fontWeight: "500" }}>T&C</span>
              </div>
              <div className='productDetails_coupons_body_line'>
                <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="20" alt="" />
                <h6>Bank Offer</h6>
                <span>10% off on RBL Bank Credit Card, up to ₹1250 on orders of ₹5,000 and above</span>
                <span style={{ color: "blue", fontWeight: "500" }}>T&C</span>
              </div>
              {openAvailableOffers ? <div>
                <div className='productDetails_coupons_body_line'>
                  <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="20" alt="" />
                  <h6>Bank Offer</h6>
                  <span>10% off on Kotak Bank Credit Card, up to ₹1250 on orders of ₹5,000 and above</span>
                  <span style={{ color: "blue", fontWeight: "500" }}>T&C</span>
                </div>
                <div className='productDetails_coupons_body_line'>
                  <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="20" alt="" />
                  <h6>Special Price</h6>
                  <span>Get extra 72% off (price inclusive of cashback/coupon)</span>
                  <span style={{ color: "blue", fontWeight: "500" }}>T&C</span>
                </div>
                <div className='productDetails_coupons_body_line'>
                  <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/49f16fff-0a9d-48bf-a6e6-5980c9852f11.png?q=90" width="20" alt="" />
                  <span>No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2500</span>
                  <span style={{ color: "blue", fontWeight: "500" }}>T&C</span>
                </div>
                <div className='productDetails_coupons_body_line'>
                  <img src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" width="20" alt="" />
                  <h6>Bank Offer</h6>
                  <span>10% off on Kotak Bank Credit Card EMI Txns, up to ₹1500 on orders of ₹5,000 and above</span>
                  <span style={{ color: "blue", fontWeight: "500" }}>T&C</span>
                </div>
              </div> : <p style={{ cursor: "pointer", color: "blue", display: "flex" }} onClick={() => { setOpenAvailableOffers(!openAvailableOffers) }}>View 4 More Offers</p>}
            </div>
          </div>
          <div className='productDetails_delivery'>
            <span style={{ fontWeight: "500", color: "#878787" }}>Delivery</span>
            <div style={{width: "fit-content"}}>
              <div className='productDetails_delivery_pincode'>
                <div className='productDetails_delivery_input'>
                  <i class="fa-solid fa-location-dot" style={{color: "#155ad1"}}></i>
                  <input ref={pinCodeRef} type="text" placeholder='Enter Delivery Pin-Code' min="0" max="999999" step='1' pattern="[0-9]{6}" maxLength={6} onChange={(e) => { setPinCode(e.target.value) }}/>
                </div>
                <div><button style={{color: "blue"}} onClick={() => { pinCodeRef.current.focus(); }}>Change</button></div> 
              </div>
              <hr style={{marginTop: "-0.1px", color: "#0000ff", height: "2px", opacity: "1"}}/>
              
              <div style={{marginTop: "-10px"}}><h6>{pinCode?.length == 6 ? "Delivery by 27 Oct, Friday" : ""}</h6></div>
              <div></div>
            </div>
          </div>
          <div className='productDetails_seller'>
            <span style={{ fontWeight: "500", color: "#878787" }}>Seller</span>
            <div>
              <span className='productDetails_seller_name'>SVPeripherals</span>
              <ul style={{marginLeft: "-10px"}}>
                <div style={{display: "flex", marginBottom: "-10px", marginTop: "5px"}}> <li style={{opacity: "0.5"}}></li><p>7 Days Replacement</p></div>
                <div style={{display: "flex"}}> <li style={{opacity: "0.5"}}></li><p>GST invoice available</p></div>
              </ul>
            </div>
          </div>
          <div className='productDetails_description'>
            <span style={{ fontWeight: "500", color: "#878787" }}>Description</span>
            <div>
              <span className={readMore ? 'show' : 'productDetails_description_text'}>Groove to your favorite songs for hours on end, flaunting the boAt Airdopes Alpha Earbuds. boAt"s IWPTM tech speeds up pairing so there"s no time lost for your entertainment. The large 13 mm dual drivers pump out high-octane boAt Signature sound making these earbuds truly an alpha. Long rides are no longer tedious when you can catch up on podcasts or new OTT releases, courtesy of the immense playback time of up to 35 hours. Additionally, ASAPTM charge ensures that the fun never stops with up to 120 minutes of playtime when charged for merely 10 minutes. Moreover, BEASTTM mode eliminates lag with 50 ms low latency infusing a dose of adrenaline into your gaming sessions. With dynamic sound in sync, visuals feel realistic. These earbuds also boast IPX5 resistance that keeps sweat and water splashes at bay for hassle-free workouts at the gym. A simple tap enables the voice assistant to follow a plethora of commands ranging from calling your loved ones to creating your shopping list. Complete your tasks on the go, with the alpha of true wireless sound at your fingertips.</span>
              <span style={readMore ? {display: "none"}  : {color: "blue", cursor: "pointer"}} onClick={() => {setReadMore(!readMore)}}>Read More</span>
            </div>
          </div>
          <div className='productDetails_reviews'>
            <div className='productDetails_reviews_head'>
              <h5>Ratings & Reviews</h5>
              <button>Rate Product</button>
            </div>
            <div className='productDetails_reviews_body'>
              <div className='productDetails_reviews_ratings'>
                <h3>{data?.rating}&nbsp;<i class="fa-solid fa-star"></i></h3>
                <span>383 Ratings</span>
                <span>&</span>
                <span>21 Reviews</span>
              </div>
              <div style={{display: "flex", height: "100%"}}>
                {/* <div className='productDetails_reviews_ratings_chart'>
                  <span>5<i class="fa-solid fa-star"></i></span>
                  <div className='productDetails_reviews_ratings_chart_part'></div>
                  <span>{ratings[0].number}</span>
                </div>
                <div className='productDetails_reviews_ratings_chart'>
                  <span>4<i class="fa-solid fa-star"></i></span>
                  <div className='productDetails_reviews_ratings_chart_part'>
                  </div>
                  <span>{ratings[1].number}</span>
                </div>
                <div className='productDetails_reviews_ratings_chart'>
                  <span>3<i class="fa-solid fa-star"></i></span>
                  <div className='productDetails_reviews_ratings_chart_part'></div>
                  <span>{ratings[2].number}</span>
                </div>
                <div className='productDetails_reviews_ratings_chart'>
                  <span>2<i class="fa-solid fa-star"></i></span>
                  <div className='productDetails_reviews_ratings_chart_part'></div>
                  <span>{ratings[3].number}</span>
                </div>
                <div className='productDetails_reviews_ratings_chart'>
                  <span>1<i class="fa-solid fa-star"></i></span>
                  <div className='productDetails_reviews_ratings_chart_part'></div>
                  <span>{ratings[4].number}</span>
                </div> */}
                <BarChart />              
              </div>
              <div className='productDetails_reviews_ratings_progressbar'>
                <div><CircularProgressBar /></div>
                <div><ProgressBar /></div>
                <div><ProgressBarOne /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default ProductDetails;

