import { UserRecord } from "./userRecord";

export interface FormResponse<T>{
    totalPages: number;
    currentPage : number;
    items: T
}