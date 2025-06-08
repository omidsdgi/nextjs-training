import apiClient from "@/api/config/ApiClient";
import {ApiResponseType} from "@/types";
import {ProductType} from "@/types/api/Product";

interface Props {
    populate:Array<'categories'| 'thumbnail'|'gallery'>
    filters?:{
        is_popular:boolean;
        is_popular_fruit:boolean;
        is_best_seller:boolean;
    }
}

interface Filters {
    is_popular?: { $eq:boolean };
    is_popular_fruit?: { $eq:boolean };
    is_best_seller?: { $eq:boolean };
}

export function getAllProductsApiCall({populate,filters}:Props):Promise<ApiResponseType<ProductType>>{
    const customFilter:Filters={}

   filters?.is_popular && (customFilter.is_popular={$eq:filters?.is_popular})
   filters?.is_popular_fruit && (customFilter.is_popular_fruit={$eq:filters?.is_popular})
   filters?. is_best_seller && (customFilter.is_best_seller={$eq:filters?.is_best_seller})

return apiClient.get('/products',{
    params:{
        populate:populate.join(','),
        filters:customFilter
    }
})
}