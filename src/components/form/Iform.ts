import { FormEvent, ReactNode } from "react";

export interface Iform {
    onsubmit?:(e: FormEvent<HTMLFormElement>) => void;
    children?:ReactNode;
}