import React, {useState} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';

const SearchScreen = () => {
    const [term,setTerm] = useState(" ");
    const [searchApi,errorMessage,restaurants]= useRestaurants();
  
    return (
        <View>
            <SearchBar term={term}
             onTermChange={setTerm} 
             onTermSubmit={searchTerm => searchApi(searchTerm)}
            />
            { errorMessage ? <Text>{errorMessage}</Text>: null}
            <Text>We have found {restaurants.length} restaurants serving {term}.</Text>
        </View>
    );

};


const styles = StyleSheet.create({});

export default SearchScreen;