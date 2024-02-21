import { ReactNode } from "react";

export interface ILink {
    href?:string;
    onclick?:() => void;
    children?:ReactNode;
}