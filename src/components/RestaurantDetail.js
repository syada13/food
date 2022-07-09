import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';


const RestaurantDetail =({restaurant}) =>{
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={{uri:restaurant.image_url}}/>
            <Text style={styles.nameStyle}>{restaurant.name}</Text>
            <Text>{restaurant.rating} Stars,{restaurant.review_count} Reviews </Text>
        </View>

    );

};


const styles = StyleSheet.create({
    imageStyle:{
        width: 200,
        height: 150,
        borderRadius: 4,
        marginBottom: 5
        
    },
nameStyle:{
    fontWeight:'bold'

},
container:{
    marginLeft:15 
}


});

export default RestaurantDetail;