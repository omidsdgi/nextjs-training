import apiClient from "@/api/config/ApiClient";
import {AuthResponseType} from "@/types/api/Auth";
interface Data{
    username:string;
    email:string;
    password:string;
}

export function registerApiCall(data:Data):Promise<AuthResponseType> {
return apiClient.post('/auth/local/register',data)
}