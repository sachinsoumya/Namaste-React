import { useState , useEffect } from "react";
import { MENU_ID } from "../Utils/constant";

const useRestaurant = (resId) =>{

const [resInfo, setResInfo] = useState(null);

useEffect(()=>{
    fetchData();
} , [])

const fetchData = async() =>{
    const data = await fetch(`${MENU_ID}=${resId}&catalog_qa=undefined&submitAction=ENTER`);
    const json = await data.json();

    console.log(json);
    setResInfo(json);
}


    return resInfo ;
}

export default useRestaurant ;