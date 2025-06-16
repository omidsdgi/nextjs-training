import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";
import {useContext} from "react";
import {BasketContext} from "@/store/basketContext";
import {IconBox} from "@/components";
import {useBasket} from "@/hooks/use-basket";

interface Props {
productData:EntityType<ProductType>
}

export function ProductCardBottom({productData}: Props) {
    // const basket = useContext(BasketContext)
    // const currentProductInBasket=basket.getItem(productData.id);

    const{addItem,updateItem,getItem}=useBasket()
    const basketItem= getItem(productData.id)
    return (
        <div className="add-product">
            {
                basketItem ?
                    <div
                        className="input-product__container  border-[1px] rounded-[4px] border-green-300 text-green-300 h-[40px] p-[3px] w-[80px] flex justify-between">
                        <div className="flex flex-col justify-evenly">
                            <IconBox icon={"up icon-angle-small-up"} onClick={()=>updateItem(productData.id,"increase")} size={10}/>
                            <IconBox icon={"down icon-angle-small-up"}  onClick={()=>updateItem(productData.id,"decrease")} size={10}/>
                        </div>
                        {basketItem.quantity }
                    </div>
                    :
                    <button onClick={() => addItem(productData.id)} className="flex items-center justify-center text-heading-sm text-green-200 border-[1px] rounded-[4px] bg-green-150 px-[10px] py-[5px]">Adds
                        +
                    </button>
            }

        </div>
    );
}