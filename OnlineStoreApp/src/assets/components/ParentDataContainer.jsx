import React, { useState, useEffect } from "react";
import ForthContainer from './ForthContainer';
import SearchContainer from './SearchContainer';
export default function ParentDataContainer(){
    const [updateStoreData, setUpdateStoreData] = useState([]);
    useEffect(() => {
      storeData();
    }, []);
    const storeData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const jasonData = await response.json();
      setUpdateStoreData(jasonData);
    };
    return(
        <>
        <ForthContainer data={updateStoreData}/>
        <SearchContainer data={updateStoreData}/>

        </>
    )
}