import { SPANYaxios } from "../../APICall";


export async function add (cartdetails,navigation,fetchdata){
    console.log(cartdetails);
    
    try {
      const response = await SPANYaxios.post('/orderitems',cartdetails);
      if (response.status === 200||response.status === 201) {
        fetchdata("cartitems")
        navigation.navigate('Tab', { screen: 'Order' });
      } else {
        console.error("Error: Unable to add product. Status code:", response.status);
      }
    } catch (err) {
      console.error("Error while making request:", err);
    }
    
  }
  
  
export async function checkout (functiondata,navigation,fetchdata){
  console.log('recive screen opening.....',functiondata);
  const data={
    complete:true,
    order_id:"SPANY55663"
  }
  try{
    const response =await SPANYaxios.put(`/orderview/${functiondata.order}`,data)
    if (response.status === 200||response.status === 201) {
      fetchdata("cartitems")
      fetchdata("deliveritems")
      navigation.navigate('recivescreen')
    } else {
      console.error("Error: Unable to add delivery. Status code:", response.status);
    }
  } catch (err) {
    console.error("Error while making request in delivery:", err);
  }
}
  

  