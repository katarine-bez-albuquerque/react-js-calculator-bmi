import { ChangeEvent } from "react";

export interface Iinput {
    type?:string;
    value?:string;
    placeholder?:string;
    name?:string;
    complete?:string;
    onchange?:(e: ChangeEvent<HTMLInputElement>) => void;   
}