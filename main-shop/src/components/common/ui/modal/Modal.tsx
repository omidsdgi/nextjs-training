import React from "react";
import {Portal} from "@/components";

interface Props {
    children?: React.ReactNode;
    title: string;
    closeModal: () => void;
}

export function Modal({children,title,closeModal}: Props) {
    return (
        <Portal onClose={closeModal}>
            <div
                className={'z-10 min-w-[100vw] md:min-w-[50vw] min-h-[100vh] md:min-h-[50vh]  border-2 overflow-auto bg-gray-300 '}>
                <div className={'flex justify-between rounded bg-white p-8 text-[22px]'}>


                    <div onClick={closeModal} className={'cursor-pointer'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
                            <path
                                d="M 7 4
       c 6.744125 4 6.4879687 4.4879687 6.292988 4.2929688
       l 4.2929688 6.2929688
       c -0.195 0.195 -0.195 0.4879687 0 0.6839688
       l -1.4142136 1.4142136
       c -0.195 0.195 -0.4879687 0.195 -0.6839688 0
       l -6.2929688 -4.2929688
       l -4.2929688 6.2929688
       c -0.195 0.195 -0.4879687 0.195 -0.6839688 0
       l -1.4142136 -1.4142136
       c -0.195 -0.195 -0.195 -0.4879687 0 -0.6839688
       l 4.2929688 -6.2929688
       l -6.2929688 -4.2929688
       c -0.195 -0.195 -0.195 -0.4879687 0 -0.6839688
       l 1.4142136 -1.4142136
       c 0.195 -0.195 0.4879687 -0.195 0.6839688 0
       l 6.2929688 4.2929688
       l 4.2929688 -6.2929688
       c 0.195 -0.195 0.4879687 -0.195 0.6839688 0
       l 1.4142136 1.4142136
       c 0.195 0.195 0.195 0.4879687 0 0.6839688
       l -4.2929688 6.2929688 Z"
                                fill="#000000"
                                stroke="#000000"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>


                    </div>
                    {title}
                </div>
                <div className={'p-8 text-[18px]'}>
                    {children}
                </div>
            </div>
        </Portal>
    );
}