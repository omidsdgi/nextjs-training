import {FieldErrors} from "react-hook-form";

interface Props {
    errors: FieldErrors<any>
    name:string
}

export function ErrorMessage({errors,name}: Props) {


    return (
        <div>
            {errors && errors[name] && errors[name]?.message as string}
            </div>
    );
}