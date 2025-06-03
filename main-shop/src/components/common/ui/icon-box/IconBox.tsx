interface Props {
    icon: string;
    size?: number;
}

export function IconBox({icon,size=22}: Props) {
    //TODO should implement form
    return (
        <i className={`${icon} text-[${size}px]`}></i>
    );
}