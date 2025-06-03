import {ReactNode} from "react";
import Footer from "@/components/layouts/footer/Footer";
import Header from "@/components/layouts/header/Header";

function Layout({children}: {children: ReactNode}   ) {
    return (
        <>
            <h1>This is layout</h1>
            <Header/>
            <main>{children} </main>
            <Footer/>
        </>
    )
}

export default Layout;