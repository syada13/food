import React from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import RestaurantDetail from './RestaurantDetail';
import { withNavigation } from 'react-navigation';



const RestaurantsList = ({title,restaurants,navigation}) => {
    
    if(!restaurants.length){
        return null;

    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={restaurants}
            keyExtractor={restaurant =>restaurant.id}
            renderItem={({item}) => {
                return (
                <TouchableOpacity onPress={() => navigation.navigate('RestaurantShow',{id:item.id})}>
                <RestaurantDetail restaurant={item}/>
                </TouchableOpacity>
                )

            }}
            />

         
            
        </View>

    );

};

const styles = StyleSheet.create({
    titleStyle:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft:15,
        marginBottom:5
    
    },
    container:{
        marginBottom:5
    }

});


export default withNavigation(RestaurantsList);