import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {basketApiCall, updateBasketApiCall, UpdateBasketData, UUID2UserApiCall} from "@/api/config/Basket";
import {BasketItemType} from "@/types/api/basket";
import {toast} from "react-toastify";

export function useBasket() {
    const queryClient = useQueryClient();

    const {data: basketData} = useQuery({queryKey: ['get-basket'], queryFn: basketApiCall})

    const mutate=useMutation({mutationFn: updateBasketApiCall})
    const mutateUUID2User=useMutation({mutationFn: UUID2UserApiCall,onSuccess:(response)=>{
            console.log('response,response')
            window.localStorage.removeItem("uuid")
            queryClient.invalidateQueries({queryKey:['get-basket']})
    }})

    const basketItems=basketData?.data.attributes.basket_items ??[]



    const addItemHandler=(productId:number)=>{
        const prepareUpdateData=basketItems.map((item)=>{
            return{
                product:{
                    connect:[{id:item.product.data.id,}]
                },
                quantity:item.quantity
            }
        })

        prepareUpdateData.push({
            product:{
                connect:[{id:productId}]
            },
            quantity:1
        })


        const updateData:UpdateBasketData = {
            basket_items:prepareUpdateData
        }
        mutate.mutate(updateData,{onSuccess:(response)=>{
                queryClient.invalidateQueries({queryKey: ['get-basket']})
            }})
    }


const updateItemHandler=(productId:number,type:'increase'| 'decrease')=>{
    let prepareUpdateData=basketItems.map((item)=>{
        return{
            product:{
                connect:[{id:item.product.data.id,}]
            },
            quantity:item.quantity
        }
    })
    prepareUpdateData= prepareUpdateData.map((item)=>{
        if (item.product.connect[0].id === productId){
            if (type ==='increase'){
                item.quantity= item.quantity+1
            }else{
                item.quantity= item.quantity -1
            }
        }
        return item;
    })
    const updateData:UpdateBasketData = {
        basket_items:prepareUpdateData
    }
    mutate.mutate(updateData,{onSuccess:(response)=>{
            queryClient.invalidateQueries({queryKey: ['get-basket']})
        },onError:(response)=>{
            // @ts-ignore
            toast(response.response.data.error.message)
    }})
}
    const getItemHandler=(productId:number):BasketItemType |undefined=>{
       return   basketItems.find((item)=>item.product.data.id === productId)

    }

    const uui2userHandler=()=>{
        const token=window.localStorage.getItem("token");
        const uuid=window.localStorage.getItem("uuid");

        if(uuid && token){
            if(basketItems.length>0){
        mutateUUID2User.mutate(uuid)
            }else {
                window.localStorage.removeItem("uuid");
                queryClient.invalidateQueries({queryKey:['get-basket']})
            }
    }
}

    return {basketItems:basketItems ,addItem:addItemHandler,updateItem:updateItemHandler,getItem:getItemHandler,uui2user:uui2userHandler}
}