import React, {useState} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantsList from '../components/Restaurants';

const SearchScreen = () => {
    const [term,setTerm] = useState(" ");
    const [searchApi,errorMessage,restaurants]= useRestaurants();

    const filterRestaurantByPrice = (price) =>{
        return restaurants.filter((restaurant) => {
            return restaurant.price === price;
        });
    };

  
    return (
        <View>
            <SearchBar term={term}
             onTermChange={setTerm} 
             onTermSubmit={searchTerm => searchApi(searchTerm)}
            />
            { errorMessage ? <Text>{errorMessage}</Text>: null}
            <Text>We have found {restaurants.length} restaurants.</Text>
            <RestaurantsList restaurants={filterRestaurantByPrice('$')} title="Cost Effective"/>
            <RestaurantsList restaurants={filterRestaurantByPrice('$$')} title="Bit Pricer"/>
            <RestaurantsList restaurants={filterRestaurantByPrice('$$$')} title="Bit Spender!"/>
        </View>
    );

};


const styles = StyleSheet.create({});

export default SearchScreen;