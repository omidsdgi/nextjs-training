import {IconBox} from "@/components/common/ui/icon-box";
import {useForm} from "react-hook-form";
import {useMutation} from "@tanstack/react-query";
import {getAllProductsApiCall} from "@/api/config/Product";
import {useEffect, useState} from "react";
import {EntityType} from "@/types";
import {ProductType} from "@/types/api/Product";
import {useDebounce} from "@/hooks/use-debounce";

interface Props {
    inputClassName?: string;

}

interface FormData {
    search_text: string;
}
interface FilterData{
    title:{
        $containsi:string
    }
}

export function SearchForm({inputClassName=''}: Props) {
    const [resultData, setResultData] = useState<Array<EntityType<ProductType>>>([])
    const{register,handleSubmit,watch} =useForm<FormData>()

    const mutation = useMutation({mutationFn:(data:FilterData)=>getAllProductsApiCall({filters:data})})

    const search_text= watch('search_text')

    useEffect(()=>{
        if(search_text){
            delay()
        }else {
            setResultData([])
        }

    },[search_text])

    const onSubmit=(data:FormData)=> {
        if(data.search_text.length<=1)
            return;
        mutation.mutate({
            title: {
                '$containsi': data.search_text
            }

        },{
            onSuccess:(response)=>{
                setResultData(response.data)
            }
        })


    }
    const delay=useDebounce(handleSubmit(onSubmit),1000)
    return (
        <div className={"relative"}>
            <form name="search-form" onSubmit={handleSubmit(onSubmit)} action="#" method="post"
                  className="flex items-center">
                <input autoComplete={'off'} type="text" {...register('search_text')} placeholder="Search for items"
                       className={`text-xsmall text-gray-400 border-gray-300 w-full  focus:outline-none ${inputClassName}`}/>
                <button type="submit"><IconBox icon={"icon-search"}/></button>
            </form>
            {
                resultData &&
                <div className={'absolute bg-white w-full left-0 right-0 top-14'}>
                    <ul>
                        {
                            resultData.map((item:EntityType<ProductType>,index) => {
                                return(<li key={item.id} className={'p-4 hover:bg-green-300 hover:text-white cursor-pointer'}>{item.attributes.title}</li>)
                            })
                        }
                    </ul>
                </div>
            }
        </div>
    );
}

