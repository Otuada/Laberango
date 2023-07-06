import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../Constants/url";
import axios from "axios";
import { ContainerFeed, CardResta, InputFeed, Menu, MenuItens } from "./styled";
import CardRestaurant from "../../Components/cardRestaurant/cardRestaurant";
import { Header } from "../../Components/Headers/header";

export const Feed = () =>{
    const [restaurants, setRestaurants] = useState([])
    const [inputSearch, setInputSearch] = useState('')
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
    console.log(inputSearch)
    useEffect(() =>{
        getRestaurants()
    }, [])
    const filterRestaurant = restaurants.filter((restaurant) => {
        return inputSearch ? restaurant.name.toLowerCase().includes(inputSearch.toLowerCase()) : true;
      }).map((restaurant) =>{
        return <CardRestaurant restaurant={restaurant}/>
     })
      

   
    return (
    <ContainerFeed>
        <Header title={"LabeRango"}/>
        <InputFeed
            value={inputSearch}
            onChange={(event)=>setInputSearch(event.target.value)}
        />
        <Menu>
            <MenuItens select ={true}>Burguer</MenuItens>
            <MenuItens select ={false}>Massas</MenuItens>
            <MenuItens select ={false}>Assiática</MenuItens>
            <MenuItens select ={false}>Saudável</MenuItens>
            <MenuItens select ={false}>Promoção</MenuItens>
            <MenuItens select ={false}>Bebidas</MenuItens>        
        </Menu>
        <CardResta>
             {filterRestaurant}
        </CardResta>
    </ContainerFeed>
    )
}

export default Feed 