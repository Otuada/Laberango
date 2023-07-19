import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../Constants/url";
import axios from "axios";
import { ContainerFeed, CardResta, InputFeed, Menu, MenuItens } from "./styled";
import CardRestaurant from "../../Components/cardRestaurant/cardRestaurant";
import { Header } from "../../Components/Headers/header";

export const Feed = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [categoriaRestaurant, setCategoriaRestaurant] = useState([]);

  const getRestaurants = () => {
    axios
      .get(`${BASE_URL}/restaurants`, {
        headers: {
          auth: localStorage.getItem("token")
        }
      })
      .then((res) => {
        console.log(res.data);
        setRestaurants(res.data.restaurants);
        filterCategoria(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const filterCategoria = (restaurants) => {
    const arrayAux = [];
    restaurants.forEach((res) => {
      arrayAux.push(res.category);
    });

    const arrayTiraRepet = [...new Set(arrayAux)];

    setCategoriaRestaurant(arrayTiraRepet);
    console.log(arrayTiraRepet);
  };

  console.log(inputSearch);

  useEffect(() => {
    getRestaurants();
  }, []);

  const filterRestaurant = restaurants
    .filter((restaurant) => {
      return inputSearch
        ? restaurant.name.toLowerCase().includes(inputSearch.toLowerCase())
        : true;
    })
    .map((restaurant) => {
      return <CardRestaurant restaurant={restaurant} />;
    });

  return (
    <ContainerFeed>
      <Header title={"LabeRango"} />
      <InputFeed
        value={inputSearch}
        onChange={(event) => setInputSearch(event.target.value)}
      />
      <Menu>
        {categoriaRestaurant.map((categoria, index) => (
          <MenuItens key={index} select={false}>
            {categoria}
          </MenuItens>
        ))}
      </Menu>
      <CardResta>{filterRestaurant}</CardResta>
    </ContainerFeed>
  );
};

export default Feed;
