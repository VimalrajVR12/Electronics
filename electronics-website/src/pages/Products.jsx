import React, { useEffect, useState } from 'react'
import { searchSVG } from "../components/SVGs"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import "../styles/Products.css"



const baseURL = `http://localhost:8080`
const star = <i class="fa-regular fa-star"></i>;


const Products = () => {
  const [data, setData] = useState();
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("")
  const [ratings, setRatings] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(9);
  const navigate = useNavigate();
  const arr = [1, 2, 3, 4, 5];
  
  

  const fetchData = async() => {
    try {
      let res = await axios.get(`${baseURL}/products?${category}&${brand}&${ratings}&${sort}&_page=${currentPage}&_limit=${limit}`);
      console.log(res);
      setData(res.data);
      setTotalPages(Math.ceil(res.headers.get(`x-total-count`)/limit));
    } catch (error) {
      console.log("Error in Fetching Data", error)
    }
  }

  const handleSortChange = (e) => {
    let temp = e.target.value;
    console.log(temp);

    if(temp === "lth")
      setSort("_sort=price&_order=asc")
    else if(temp === "htl")
      setSort("_sort=price&_order=desc")
    else if(temp === "asc")
      setSort("_sort=title&_order=asc")
    else if(temp === "desc")
      setSort("_sort=title&_order=desc")
    else
      setSort("");
  }

  const handleStars = (rating, index) => {
    if(index <= rating)
      return <i class="fa-solid fa-star" style={{color: "#1e5ecc"}}></i>;
    else
      return <i class="fa-regular fa-star" style={{color: "#1e5ecc"}}></i>;
  }

  const handleWishlist = (e) => {
    e.stopPropagation();
  }

  const handleAddToCart = (e, id) => {
    e.stopPropagation();
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);

    let timer = setTimeout(async() => {
      clearTimeout(timer);
      let data = await axios.get(`${baseURL}/products?q=${search}&_page=${currentPage}&_limit=${limit}`);
      console.log(data.data);
      setData(data.data);
      setTotalPages(Math.ceil(data.headers.get(`x-total-count`)/limit));
    }, 1000)
  }

  useEffect(() => {
    fetchData();
  }, [currentPage, category, brand, ratings, sort])
  console.log(totalPages);
  return (
    <div className='products_container'>
      <div className='products_head'>
      <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Products</li>
          </ol>
        </nav>
        <h3>Filters</h3>
        <hr />
        <div className='filters' id="Category">
          <p className="gap-1 filter_head" style={{display: "flex", marginBottom: "-10px"}}>
            <a className="filter_button" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
              Category
            </a>
          </p>
          <div className="open" id="collapseExample1">
            
            <div class="form-check" style={{display: "flex"}} onClick={() => {setCategory("category=headphones")}}>
                <input class="form-check-input" type="radio" name="flexRadio" id="flexRadioDefault1"  />
                <label class="form-check-label" for="flexRadioDefault1">
                  HeadPhones
                </label>
            </div>
        
            <div class="form-check" style={{display: "flex"}} onClick={() => {setCategory("category=phones")}}>
              <input class="form-check-input" type="radio" name="flexRadio" id="flexRadioDefault2"  />
              <label class="form-check-label" for="flexRadioDefault2">
                Mobiles
              </label>
            </div>
            <div class="form-check" style={{display: "flex"}} onClick={() => {setCategory("category=laptops")}}>
              <input class="form-check-input" type="radio" name="flexRadio" id="flexRadioDefault3"  />
              <label class="form-check-label" for="flexRadioDefault3">
                Laptops
              </label>
            </div>
            <div class="form-check" style={{display: "flex"}} onClick={() => {setCategory("")}}>
              <input class="form-check-input" type="radio" name="flexRadio" id="flexRadioDefault4"  />
              <label class="form-check-label" for="flexRadioDefault4">
                Reset
              </label>
            </div>
          </div>
        </div>
        <hr />
        <div className='filters' id='Brands'>
          <p className="gap-1 filter_head" style={{display: "flex", marginBottom: "-10px"}}>
            <a className="filter_button" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
              Brands
            </a>
          </p>
          <div className="open" id="collapseExample2">
            <div class="form-check" style={{display: "flex"}} onClick={() => {setBrand("brand=Apple")}}>
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
              <label class="form-check-label" for="exampleRadios1">
                Apple
              </label>
          </div>
          <div class="form-check" style={{display: "flex"}} onClick={() => {setBrand("brand=Motorola")}}>
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
            <label class="form-check-label" for="exampleRadios2">
              Motorola
            </label>
          </div>
          <div class="form-check" style={{display: "flex"}} onClick={() => {setBrand("brand=Samsung")}}>
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
            <label class="form-check-label" for="exampleRadios3">
              Samsung
            </label>
          </div>
          <div class="form-check" style={{display: "flex"}} onClick={() => {setBrand("brand=Pixel")}}>
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option4" />
            <label class="form-check-label" for="exampleRadios4">
              Pixel
            </label>
          </div>
          <div class="form-check" style={{display: "flex"}} onClick={() => {setBrand("")}}>
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios5" value="option4" />
            <label class="form-check-label" for="exampleRadios5">
              Reset
            </label>
          </div>
          </div>
        </div>
        
        <hr />
        <div className='filters' id='Ratings'>
          <p className="gap-1 filter_head" style={{display: "flex", marginBottom: "-10px"}}>
            <a className="filter_button" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
              Customer Ratings
            </a>
          </p>
          <div className="open" id="collapseExample3">
            <div class="form-check" style={{display: "flex"}} onClick={() => {setRatings("rating_gte=4")}}>
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault11" />
              <label class="form-check-label" for="flexRadioDefault11">
                4Star & Above
              </label>
            </div>
            <div class="form-check" style={{display: "flex"}} onClick={() => {setRatings("rating_gte=3")}}>
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault21"  />
              <label class="form-check-label" for="flexRadioDefault21">
                3Star & Above
              </label>
            </div>
            <div class="form-check" style={{display: "flex"}} onClick={() => {setRatings("rating_gte=2")}}>
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault31"  />
              <label class="form-check-label" for="flexRadioDefault31">
                2Star & Above
              </label>
            </div>
            <div class="form-check" style={{display: "flex"}} onClick={() => {setRatings("rating_gte=1")}}>
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault41"  />
              <label class="form-check-label" for="flexRadioDefault41">
                1Star & Above
              </label>
            </div>
            <div class="form-check" style={{display: "flex"}} onClick={() => {setRatings("")}}>
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault51"  />
              <label class="form-check-label" for="flexRadioDefault51">
                Reset
              </label>
            </div>
          </div>
        </div>
        <hr />
        
      </div>
      <div className='products_body'>
        <div className='products_body_line1'>
          <div>
            <select className='products_body_sort' onChange={handleSortChange}>
              <option value="">--Select Sort--</option>
              <option value="htl">Price High to Low</option>
              <option value="lth">Price Low to High</option>
              <option value="asc">Ascending Order</option>
              <option value="desc">Descending Order</option>
            </select>
          </div>
          <form className='products_body_search'>
            <input type="text" placeholder='Search...' onChange={(e) => { handleSearch(e) }}/>
            <button type='submit'>{searchSVG}</button>
          </form>
        </div>
        <div className='products_data'>
          {data?.map((ele, i) => {
            return <div className='products_singleProduct' key={i} onClick={() => { navigate(`/products/${ele.id}`) }}>
              <div className='products_singleProduct_div1'>
                <div><p style={{display: "flex"}}>{arr.map((data, i) => { return <div key={i}>{handleStars(ele.rating, data)}</div> })}</p></div>
                <div onClick={handleWishlist}><p><i class="fa-regular fa-heart" style={{color: "#1e5ecc"}} ></i></p></div>
              </div>
              <div className='products_singleProduct_div2'>
                <img src={ele.image} alt={ele.title} />
              </div>
              <div className='products_singleProduct_div3'>
                <div><h4>{ele.title?.slice(0, 20)}...</h4></div>
                <div className='products_singleProduct_price'><p>₹{ele.price}</p><span className='products_singleProduct_MRP'>₹{ele.MRP}</span></div>
                <div className='products_singleProduct_button'><button onClick={(e) => { handleAddToCart(e, ele.id) }}>Add To Cart</button></div>
              </div>
            </div>
          })}
        </div>
        <div className='products_pagination'>
          <button disabled={currentPage === 1} onClick={() => { setCurrentPage(currentPage - 1) }}>Previous</button>
          <button>{currentPage}</button>
          <button disabled={currentPage === totalPages} onClick={() => { setCurrentPage(currentPage + 1) }}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Products

