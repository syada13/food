import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import RestaurantDetail from './RestaurantDetail';



const RestaurantsList = ({title,restaurants}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={restaurants}
            keyExtractor={restaurant =>restaurant.id}
            renderItem={({item}) => {
                return <RestaurantDetail restaurant={item}/>

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


export default RestaurantsList;