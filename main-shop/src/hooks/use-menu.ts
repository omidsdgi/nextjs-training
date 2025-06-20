import {EntityType, MenuItemType, MenuType, PopulateType} from "@/types";
import {useQuery} from "@tanstack/react-query";
import {getMenuApiCall} from "@/api/config/Menu";

interface Prop {
    position: string;
}

export  function useMenu({position}:Prop) {
    const{data:menuData}=useQuery({queryKey:[getMenuApiCall.name],queryFn:()=>getMenuApiCall()})


    let MenuItems: null | PopulateType<MenuItemType> = null

    if (menuData  && Array.isArray(menuData)) {
        const findMenu = menuData.filter((item: EntityType<MenuType>) => item.attributes.position === position)
        if (findMenu.length > 0) {
            MenuItems = findMenu[0].attributes.menu_items;
            MenuItems?.data.sort((a: EntityType<MenuItemType>, b: EntityType<MenuItemType>) => {
                if (a.attributes.rank < b.attributes.rank)
                    return -1;
                if (a.attributes.rank > b.attributes.rank)
                    return 1;
                return 0

            })
        }
    }
    return {data: MenuItems};
}
