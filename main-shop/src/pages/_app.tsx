import "@/styles/globals.css";
import "@/styles/icon.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "react-toastify/dist/ReactToastify.css"

import type { AppProps } from "next/app";
import  {QueryClientProvider,QueryClient} from '@tanstack/react-query'
import {Layout} from "@/components";
import {Lato, Quicksand} from "next/font/google";
import {ToastContainer} from "react-toastify";

const quicksand=Quicksand({
    subsets:['latin']
})
const lato=Lato({
    weight:['100', '300'],
    subsets:['latin'],
    variable:'--font-lato'
})
const queryClient=new QueryClient({
    defaultOptions:{
        refetchOnWindowFocus: true,
        reftchIntervalBackground: true,
        retry:0
    }
});

export default function App({ Component, pageProps }: AppProps) {
    return(
        <>
            <style jsx>{`
                html{
                    font-family: ${quicksand.style.fontFamily},sans-serif;
                    --font-lato:${lato.style.fontFamily},sans-serif;
                }`}</style>
            <QueryClientProvider client={queryClient}>
                <ToastContainer
                    position="top-right"
                    autoClose={10000}
                    hideProgressBar={false}
                    closeButton={true}
                    pauseOnHover={true}
                    closeOnClick={true}
                    draggable={false}
                    theme="light"
                />
                <Layout>
                    <Component {...pageProps} />;
                </Layout>
            </QueryClientProvider>
        </>
    )
}
