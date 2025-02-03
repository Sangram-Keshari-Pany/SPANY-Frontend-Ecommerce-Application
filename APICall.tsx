import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import RNSecureStorage, {ACCESSIBLE} from 'rn-secure-storage';


let refresh = false

export const  baseURL = 'http://192.168.0.107:8000/'

export const SPANYaxios=axios.create({
    baseURL:baseURL,
    headers: {
        'Content-Type': 'application/json',
    }
})

export async function Authorization(navigation:any,fetchdata:Function){
    async function getAccessToken(){
        try {
          const accessToken = await RNSecureStorage.getItem('access_token');
          return accessToken;
        } catch (error) {
          console.error('Error getting access token:', error);
        }
    };
    const AccessToken = await getAccessToken()
    console.log(AccessToken);
    
    if (AccessToken) {
        console.log(AccessToken);
        SPANYaxios.defaults.headers['Authorization'] = `Bearer ${AccessToken}`;
        await fetchdata ()
        navigation.navigate('Tab');
        
    }
}

const defaultData = {
  userDetails:{},
  categories: [],
  subcategories: [],
  products: [],
  flashshales: [],
  favorites:[],
  reviews:[],
  cartitems:[],
  deliveritems:[],
  shippingaddress:[],
  loading: true,
  error: null,
  fetchdata:()=>{}
};

const DataContext = createContext(defaultData);

// Custom hook to use the data context
export const useData = () => useContext(DataContext);

import React from 'react'

const APICall = ({children}) => {
    const [userDetails,setUserDetails]=useState({})
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [flashshales, setFlashshales] = useState([]);
    const [favorites,setFavorites]=useState([])
    const [cartitems,setCartitems]=useState([])
    const [reviews,setReviews]=useState([])
    const [deliveritems,setDeliveritems]=useState([])
    const [shippingaddress,setShippingAddress]=useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchdata(execution="all"){ 
        if (execution==="all"){
            async function userDetails(){ 
               const response= await RNSecureStorage.getItem('userDetails')
               return(response)
            };
            const user_Details:any= await userDetails()
            setUserDetails(JSON.parse(user_Details))
        }
        // if (execution==="all"){
        //     await SPANYaxios.get('/shippingaddress')
        //     .then(response => setShippingAddress(response.data))
        //     .catch(err => setError(err.message));
        // }
        if (execution==="all"){
            await SPANYaxios.get('/category')
            .then(response => setCategories(response.data))
            .catch(err => setError(err.message));
        }
        if (execution==="all"){
            await SPANYaxios.get('/sub_category')
            .then(response => setSubcategories(response.data))
            .catch(err => setError(err.message));
        }
        if (execution==="all"){
            await SPANYaxios.get('/product')
            .then(response => setProducts(response.data))
            .catch(err => setError(err.message));
        }
        if (execution==="all"){
            await SPANYaxios.get('/flashshale')
            .then(response => setFlashshales(response.data))
            .catch(err => setError(err.message));
        }        
        if (execution==="all"){
            await SPANYaxios.get('/favorites')
                .then(response => setFavorites(response.data))
                .catch(err => setError(err.message));
        }
        if (execution==="all"){
            await SPANYaxios.get('/review')
                .then(response => setReviews(response.data))
                .catch(err => setError(err.message));
        }
        if (execution==="all" || execution==="cartitems"){
            await SPANYaxios.get('/cartitems')
                .then(response => setCartitems(response.data))
                .catch(err => setError(err.message));
        }
        if (execution==="all" || execution==="deliveritems"){
            await SPANYaxios.get('/deliveritems')
                .then(response => setDeliveritems(response.data))
                .catch(err => setError(err.message));
        }
        setLoading(false);
        console.log("api reloded");
        }

  return (
    <DataContext.Provider value={{userDetails,categories, subcategories, products, flashshales,favorites,reviews,cartitems,deliveritems,shippingaddress,loading, error,fetchdata}}>
        {children}
    </DataContext.Provider>
  )
}

export default APICall


export function demo(functionalitytype){
  console.log("demo");
  
}


