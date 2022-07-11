import {useState,useEffect} from 'react';
import yelp from '../api/yelp';

export default  () => { 
    const [restaurants,setRestaurants] = useState([]);
    const [errorMessage,setErrorMessaage] = useState('');

    const searchApi= async(term) => {
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
    
    useEffect(() =>{
        searchApi('pasta');
    },[]);

    return [searchApi,errorMessage,restaurants];

};
