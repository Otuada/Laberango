import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../Constants/url";
import axios from "axios";
import { ContainerFeed, CardResta, InputFeed } from "./styled";
import CardRestaurant from "../../Components/cardRestaurant/cardRestaurant";
import { Header } from "../../Components/header/header";

export const Feed = () =>{
    const [restaurants, setRestaurants] = useState([])
    const getRestaurants = () => {
        axios
        .get(`${BASE_URL}/restaurants`,{
            headers:{
                auth: localStorage.getItem("token")
             }
            })
        .then((res) => {
            console.log(res.data)
            setRestaurants(res.data.restaurants)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
    useEffect(() =>{
        getRestaurants()
    }, [])
    return (
    <ContainerFeed>
        <Header title={"LabeRango"}/>
        <CardResta>
        <InputFeed></InputFeed>
             {restaurants.map((restaurant) =>{
                return <CardRestaurant restaurant={restaurant}/>
             }
             )}
        </CardResta>
    </ContainerFeed>
    )
}

export default Feed 