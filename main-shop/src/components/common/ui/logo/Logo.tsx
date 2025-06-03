import Image from "next/image";
import Link from "next/link";

interface Props {
    
}

export function Logo({}: Props) {
    return (
        <Link href="/">
            <Image className={"w-[117px] lg:w-[242px]"} src={"/assets/images/Logo.png"} alt={"logo"} width={242} height={66}/>
        </Link>

    );
}