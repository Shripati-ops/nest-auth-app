export interface IUsers{
    username:string,
    email : string,
    mobile_no : string,
    password : string,
    friends_with : Array<number> | null
}