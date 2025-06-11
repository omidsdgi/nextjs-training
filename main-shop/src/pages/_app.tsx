import "@/styles/globals.css";
import "@/styles/icon.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "react-toastify/dist/ReactToastify.css"

import type { AppProps } from "next/app";
import {QueryClientProvider, HydrationBoundary, QueryClient} from '@tanstack/react-query'
import {Layout} from "@/components";
import {Lato, Quicksand} from "next/font/google";
import {ToastContainer} from "react-toastify";
import {ModalContextProvider} from "@/store/ModalContext";
import {AuthContextProvider} from "@/store/AuthContext";

const quicksand = Quicksand({
    subsets: ["latin"],
});

const lato = Lato({
    weight: ["100", "300"],
    subsets: ["latin"],
    variable: "--font-lato",
});

export default function App({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                refetchIntervalInBackground: false,
                retry: 0,
            },
        },
    });
    return(
        <>
            <style jsx>{`
                html{
                    font-family: ${quicksand.style.fontFamily},sans-serif;
                    --font-lato:${lato.style.fontFamily},sans-serif;
                }`}</style>
            <QueryClientProvider client={queryClient}>
                <HydrationBoundary state={pageProps.dehydratedState}>
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
                    <AuthContextProvider>
                        <ModalContextProvider>
                            <div id={'portal'}></div>
                            <Layout>
                                <Component {...pageProps} />;
                            </Layout>
                        </ModalContextProvider>
                    </AuthContextProvider>
                </HydrationBoundary>
            </QueryClientProvider>
        </>
    )
}
