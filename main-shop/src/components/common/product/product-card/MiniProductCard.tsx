import {ImageView, Rating} from "@/components";
import {ProductType} from "@/types/api/Product";

interface Props {
    data:ProductType

}

export function MiniProductCard({data}: Props) {
    return (

        <div className="flex gap-3 lg:gap-5">
            <ImageView src={data.thumbnail?.data?.attributes?.url} alt={'product'} height={120} width={120}/>
            <div className="flex flex-col justify-between">
                <div>
                    <div className="text-heading6 text-blue-300 mb-1">{data.title}</div>
                    <Rating rate={data.rate}/>

                    {
                        data.sell_price ?
                            <div>
                                <span className="text-heading5 text-green-200">${data.sell_price}</span>
                                <span className="text-heading-sm line-through text-gray-500">${data.price}</span>
                            </div>
                            :
                            <span className="text-heading5 text-green-200">${data.price}</span>
                    }
                </div>
            </div>
        </div>

    );
}