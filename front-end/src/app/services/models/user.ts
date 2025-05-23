import { Address } from "./address";

export interface User {
  id: number; 
  name: string;
  email: string;
  phone: string;         
  address: Address;       
  photo: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}
