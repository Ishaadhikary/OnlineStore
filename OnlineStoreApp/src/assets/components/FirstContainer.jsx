import React, { useState, useEffect } from "react";
// Nav Bar Container
import { AiOutlineSearch } from "react-icons/ai";
import "../css/firstContainer.css";

export default function FirstContainer() {
  const [query, setQuery] = useState("");
  const [updateSearchData, setUpdateSearchData] = useState([]);

  useEffect(() => {
    searchData();
  }, []);

  const searchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json();
    setUpdateSearchData(jsonData);
  };

  return (
    <>
      <div className="first-container">
        <img src="/logo.svg" alt="" />
        <span className="first-container-second-item">
        <a href="#productSection">Products</a>
        <a href="#categorySection">Categories</a>
        <a href="#productSection">What's New</a>
        </span>
        <span className="first-container-third-item">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
          />{" "}
          <AiOutlineSearch />
        </span>
      </div>
      <div>
        {query && (
          <div className="card-container-box">
            {updateSearchData
              .filter((searchItem) =>
                searchItem.title.toLowerCase().includes(query.toLowerCase())
              )
              .map((values) => (
                <div key={values.id} className="card-container">
                  <div>
                    <img className="product-img" src={values.image} alt="" />
                    <p>
                      <strong>{`$ ${values.price}`}</strong>
                    </p>
                    <span className="second-container-second-item">
                      <img src="/star.svg" alt="Rating Star" />{" "}
                      {`${values.rating.rate}(${values.rating.count})`}
                    </span>
                    <h4>{values.title}</h4>
                    <p>{values.description}</p>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
}
