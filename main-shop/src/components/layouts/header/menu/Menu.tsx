import Link from "next/link";
import {IconBox} from "@/components/common/ui/icon-box";
import {EntityType, MenuItemType} from "@/types";
import {useMenu} from "@/hooks/use-menu";
import React, {MouseEventHandler, useEffect, useState} from "react";
import {useOverlay} from "@/hooks/use-overlay";

interface Props {

}

export function Menu( ) {
    const [showCategoryMenu, setShowCategoryMenu] = useState(false);


    const{data:mainMenuItems}=useMenu({position:'main_menu'});
    const{data:categoryMenuItems}=useMenu({position:'brows-category'});

    useOverlay({
        onClick:()=>{
            setShowCategoryMenu(false)
        },

    })
    const categoryBtnClickHandler=(e: React.MouseEvent<HTMLDivElement>)=>{
        setShowCategoryMenu((prevState)=>!prevState);
        e.stopPropagation();
    }
    const categoryBodyClick=(e:React.MouseEvent<HTMLDivElement>)=>{
        e.stopPropagation()
    }



    return (
        <>
            <div className={'relative'} >
                <div onClick={categoryBtnClickHandler} className="inline-flex lg:flex cursor-pointer bg-green-200 gap-2.5 text-white px-4 py-3 rounded-[5px] items-center">
                    <IconBox  icon={'icon-apps'} size={24} link={'#'} title={'Browse All Categories'} titleClassName={"text-medium ml-2"} />
                    <IconBox icon={'icon-angle-small-down'} size={24}/>
                </div>
                <div onClick={categoryBodyClick} className={`${showCategoryMenu ? 'flex': 'hidden'} lg:absolute z-20 bg-white left-0 top-16  w-[500px] lg:rounded-[5px] lg:border-[1px] border-green-300 lg: hover:cursor-default`}>
                    <div  className="flex flex-wrap justify-between gap-y-[15px]">

                        {
                            categoryMenuItems &&
                            categoryMenuItems.data.map((item:EntityType<MenuItemType>,index :number) => {
                                return(<IconBox key={index} link={item.attributes.link}  icon={item.attributes.icon_name}  size={30} title={item.attributes.title} titleClassName={'text-heading-sm text-blue-300'} linkClassName={'gap-3.5 rounded-[5px] lg:border-[1px] lg:border-gray-300 py-2.5 basis-full lg:basis-[calc(50%-8px)] justify-start pl-4 lg:hover:border-green-300 '} path={item.attributes.icon_path}  />)
                            })
                        }
                        <div
                             className="cursor-pointer flex gap-4 items-center justify-center lg:w-full mt-[17px]">
                            <i className="icon-add text-[24px]"></i>
                            <div className="text-heading-sm  text-blue-300">Show More Categories</div>
                        </div>
                    </div>
                </div>
            </div>

            <nav id="main_menu">
                <ul className="flex flex-col lg:flex-row items-start lg:items-center text-heading6 lg:text-heading-sm 2xl:text-heading6 gap-[32px] mt-[32px] lg:mt-0 lg:gap-3 xl:gap-5 2xl:gap-10">
                    {
                        mainMenuItems &&
                        mainMenuItems.data.map((item: EntityType<MenuItemType>, index: number) => {
                            return (
                                <li key={index}>
                                    {
                                        item.attributes.icon_name    ? <IconBox link={item.attributes.link} icon={ item.attributes.icon_name} title={item.attributes.title} size={24}/>
                                            : <Link href={item.attributes.link} className="flex flex-row">{item.attributes.title}</Link>
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </>
    );
}