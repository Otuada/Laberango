import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../Constants/url";
import axios from "axios";
import { ContainerFeed, CardResta, InputFeed, Menu, MenuItens } from "./styled";
import CardRestaurant from "../../Components/cardRestaurant/cardRestaurant";
import { Header } from "../../Components/Headers/header";

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
        <InputFeed></InputFeed>
        <Menu>
            <MenuItens select ={true}>Burguer</MenuItens>
            <MenuItens select ={false}>Massas</MenuItens>
            <MenuItens select ={false}>Assiática</MenuItens>
            <MenuItens select ={false}>Saudável</MenuItens>
            <MenuItens select ={false}>Promoção</MenuItens>
            <MenuItens select ={false}>Bebidas</MenuItens>        
        </Menu>
        <CardResta>
             {restaurants.map((restaurant) =>{
                return <CardRestaurant restaurant={restaurant}/>
             }
             )}
        </CardResta>
    </ContainerFeed>
    )
}

export default Feed 