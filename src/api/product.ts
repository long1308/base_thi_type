import { Iproduct, signin, signup } from "../interface/product";
import insntance from "./insntante";

// get all
export const getAllProducts = () => {
    return insntance.get("/products");
}

// get one

export const getProductById = (id:number) => {
    return insntance.get(`/products/${id}`);
}

// create

export const createProduct = (product:Iproduct) => {
    return insntance.post("/products", product);
}

// update

export const updateProduct = (id:number, product:Iproduct) => {
    return insntance.put(`/products/${id}`, product);
}

// delete

export const deleteProduct = (id:number) => {
    return insntance.delete(`/products/${id}`);
}
//signup 
export const signupUser = (user:signup) => {
    return insntance.post("/signup", user);
}
//signin

export const signinUser = (user:signin) => {
    return insntance.post("/signin", user);
}