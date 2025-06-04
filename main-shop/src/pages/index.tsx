import {Banner, FeaturedCategories, Section} from "@/components";


export default function Home() {
    return(
        <>
            <Section className={"container mb-[78px]"}>
                <Banner/>
            </Section>

            <Section className={"container mb-[78px]"}>
                <div className="hidden sm:flex mb-[50px]">
                    <h2 className="text-heading3 text-blue-300">Featured Categories</h2>
                </div>
                <FeaturedCategories/>
            </Section>
        </>
    )
}
