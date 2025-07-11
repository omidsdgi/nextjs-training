import {ReactNode} from "react";
import {Footer} from "@/components";
import {Header} from "@/components";

export function Layout({children}: {children: ReactNode}   ) {
    return (
        <>
            <Header/>
            <main>{children} </main>
            <Footer/>
        </>
    )
}

