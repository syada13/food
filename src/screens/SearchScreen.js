import React, {useState} from 'react';
import {Text,View,StyleSheet,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantsList from '../components/RestaurantsList';


const SearchScreen = ({navigation}) => {
    const [term,setTerm] = useState(" ");
    const [searchApi,errorMessage,restaurants]= useRestaurants();

    const filterRestaurantByPrice = (price) =>{
        return restaurants.filter((restaurant) => {
            return restaurant.price === price;
        });
    };

  
    return (
        <>
            <SearchBar term={term}
             onTermChange={setTerm} 
             onTermSubmit={()=> searchApi(term)}
            />
            { errorMessage ? <Text>{errorMessage}</Text>: null}
            <ScrollView>
            <RestaurantsList
              restaurants={filterRestaurantByPrice('$')} 
              title="Cost Effective"
              navigation={navigation}/>

            <RestaurantsList 
              restaurants={filterRestaurantByPrice('$$')} 
              title="Bit Pricer"
              navigation={navigation}/>
            <RestaurantsList
              restaurants={filterRestaurantByPrice('$$$')} 
              title="Bit Spender!"
              navigation={navigation}/>
            </ScrollView>
        </>
    );

};


const styles = StyleSheet.create({});

export default SearchScreen;