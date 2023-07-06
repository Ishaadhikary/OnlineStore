import React, { useState, useEffect } from "react";
import "../css/forthContainer.css";
export default function ForthContainer() {
  const [updateStoreData, setUpdateStoreData] = useState([]);
  useEffect(() => {
    storeData();
  }, []);
  const storeData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    console.log(response);
    const jasonData = await response.json();
    console.log(jasonData);
    setUpdateStoreData(jasonData);
  };
  return (
    <>
      <div className="forth-container">
        <h2>
          Products
          <hr />
        </h2>
        <div className="card-container-box">
          {updateStoreData.map((values) => {
          
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

          <button><a href="/commingSoon.html">View All</a></button>
        </div>
      </div>
    </>
  );
}
