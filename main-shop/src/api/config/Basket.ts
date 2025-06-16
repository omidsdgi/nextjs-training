import apiClient from "@/api/config/ApiClient";
import {ApiResponseSingleType} from "@/types";
import {BasketType} from "@/types/api/basket";
import {param} from "ts-interface-checker";

export interface UpdateBasketData {
 basket_items:Array<{
  product:{
   connect:Array<{id:number}>
  }
  quantity:number
 }>

}

export async function basketApiCall():Promise<ApiResponseSingleType<BasketType>> {


 const token=window.localStorage.getItem("token");
 const uuid=window.localStorage.getItem("uuid");
 if(!uuid && !token) {
  const response:ApiResponseSingleType<BasketType>= await apiClient.post('/my-basket')

  window.localStorage.setItem("uuid",response.data.attributes.uuid)
  return response
 }
 if(uuid){
  return await  apiClient.get('/my-basket',{
   params:{
    uuid:uuid,
   }
  })

 }
 return await  apiClient.get('/my-basket')
}

export async function  updateBasketApiCall(data:UpdateBasketData):Promise<ApiResponseSingleType<BasketType>> {
 const uuid=window.localStorage.getItem("uuid");

 if(uuid){
  return await apiClient.put('/my-basket',{
   data:data
  },{
   params:{
    uuid:uuid,
   }
  })

 }
 return await apiClient.put('/my-basket',{
  data:data
 })
}


export function UUID2UserApiCall(uuid:string):Promise<ApiResponseSingleType<BasketType>>{
 return apiClient.post('/basket2user'+uuid)

}