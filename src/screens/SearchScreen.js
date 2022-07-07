import React, {useState} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {

    const [term,setTerm] = useState(" ");
    const [restaurants,setRestaurants] = useState([]);

    const searchApi= async() => {
        const response = await yelp.get('/search',{
            params:{
                term,
                limit:50,
                location: 'eden prarie'
            }
        });
       setRestaurants(response.data.businesses);
    };

    return (
        <View>
            <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi}/>
            <Text>Search Screen</Text>
            <Text>We have found: {restaurants.length} restaurants</Text>
        </View>
    );

};


const styles = StyleSheet.create({});

export default SearchScreen;