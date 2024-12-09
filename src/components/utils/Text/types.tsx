import { HTMLProps, ReactNode } from "react";

export interface TextProps {
    children: ReactNode,
    type: 'heading' | 'para' | 'big' | 'medium' | 'small',
    weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold',
    classname?: HTMLProps<HTMLElement>['className'],
}
