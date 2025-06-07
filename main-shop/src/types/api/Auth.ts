export interface AuthResponseType {
    jwt: string;
    user:UserType
}
export interface UserType {
    id: string;
    username: string;
    email: string;
    provider: string;
    confirm:boolean
    blocked: boolean
}