import React, {useState} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {

    const [term,setTerm] = useState(" ");
    const [restaurants,setRestaurants] = useState([]);
    const [errorMessage,setErrorMessaage] = useState('');

    const searchApi= async() => {
        try{
            const response = await yelp.get('/search',{
              params:{
                term,
                limit:50,
                location: 'eden prarie'
              }
            });
           setRestaurants(response.data.businesses);
       }catch(err){
        setErrorMessaage('Something went wrong!');

       }
    };

    return (
        <View>
            <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi}/>
            { errorMessage ? <Text>{errorMessage}</Text>: null}
            <Text>We have found {restaurants.length} restaurants serving {term}.</Text>
        </View>
    );

};


const styles = StyleSheet.create({});

export default SearchScreen;