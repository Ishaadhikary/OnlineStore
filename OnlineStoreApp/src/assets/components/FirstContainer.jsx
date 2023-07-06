import React, { useState, useEffect } from "react";
// Nav Bar Container
import { AiOutlineSearch } from "react-icons/ai";
import "../css/firstContainer.css";

export default function FirstContainer() {
  const [query, setQuery]=useState()
  const [updateSearchData, setUpdateSearchData] = useState([]);
  useEffect(() => {
    searchData();
  }, []);
  const searchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    console.log(response);
    const jasonData = await response.json();
    console.log(jasonData);
    setUpdateSearchData(jasonData);

  };
  console.log(query)
  return (
    <>
      <div class="first-container">
        <img src="/logo.svg" alt="" />
        <span className="first-container-second-item">
            <a href="#" >Products</a>
            <a href="#">Categories</a>
            <a href="#">What's New</a>
          </span>
          <span class="first-container-third-item">
            <input type="text" name="search" id="search" placeholder="Search"  onChange={(e)=>setQuery(e.target.value)}/>{" "}
            <AiOutlineSearch />
          </span>
      </div>
      <div><div className="card-container-box">
          {updateSearchData.filter((searchItem)=>searchItem.title.toLowerCase().includes(query)).map((values) => {
          
            return (
              <>
                <div key={values.id} className="card-container">
                  <div>
                    <img className="product-img" src={values.image} alt="" />
                    <p><strong>{`$ ${values.price}`}</strong></p>
                    <span className="second-container-second-item"><img src="/star.svg" alt="Rating Star" /> {`${values.rating.rate}(${values.rating.count})`}</span>
                    <h4>{values.title}</h4>
                    <p>{values.description}</p>
                  </div>
                </div>
              </>
            );
          })}
          </div>
</div>
    </>
  );
}
