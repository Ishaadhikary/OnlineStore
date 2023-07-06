import React, { useState, useEffect } from "react";
// import Card from "./Card";
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
                <div className="card-container">
                  <div>
                    <img src="/secondContainerImg.svg" alt="" />
                    <p>{`$ ${values.price}`}</p>
                    <h4>{values.title}</h4>
                    <p>{values.description}</p>
                  </div>
                </div>
              </>
            );
          })}

          <button>View All</button>
        </div>
      </div>
    </>
  );
}
