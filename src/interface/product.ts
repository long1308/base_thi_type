export interface Iproduct {
    id: number;
    name: string;
    price: number;
    description: string;
    thuonghieu:string;
    xuatxu:string;
}
export interface signup {
    name : string;
    email : string;
    password : string;
    confirmPassword : string;
}
export interface signin {
    email : string;
    password : string;
}
