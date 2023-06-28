import { BoxInformeTempoPreco, ConteinerCardRestaurant, ImageRestaurants, InformeTempoPreco, NameRestaurants } from "./styled";

const CardRestaurant = ({restaurant}) => {
    
    
    return <ConteinerCardRestaurant>
            <ImageRestaurants src={restaurant.logoUrl}/>
            <NameRestaurants>{restaurant.name}</NameRestaurants>
            <BoxInformeTempoPreco>
                <InformeTempoPreco>{restaurant.deliveryTime}</InformeTempoPreco>
                <InformeTempoPreco>{restaurant.shipping}</InformeTempoPreco>
            </BoxInformeTempoPreco>
    </ConteinerCardRestaurant>
}

export default CardRestaurant