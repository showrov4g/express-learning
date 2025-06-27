import { Model } from "mongoose";

export interface IAddress {
   
        city: string,
        street: string;
        zip: number
    
}



export interface IUser {
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    password: string,
    role: 'USER'| 'ADMIN'|'SUPERADMIN',
    address: IAddress,
     createdAt?: Date;  
    updatedAt?: Date;   
  __v?: number;  
}


export interface IUserMethods{
  hashPassword(password: string): Promise<void>;
}



export interface IUserStaticModels extends Model<IUser>{
  hashPassword(password: string): Promise<void>;
}


