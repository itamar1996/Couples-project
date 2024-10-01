export default interface ResponseData<T>{
    err:boolean;
    message?:string;
    data?:any;
    status:number
}