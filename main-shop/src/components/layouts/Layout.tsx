import {ReactNode} from "react";
import {Footer} from "@/components";
import {Header} from "@/components";

export function Layout({children}: {children: ReactNode}   ) {
    return (
        <>
            <h1>This is layout</h1>
            <Header/>
            <main>{children} </main>
            <Footer/>
        </>
    )
}

