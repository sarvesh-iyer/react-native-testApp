import { HTMLProps } from "react"

export interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'white',
    title: string,
    btnClass?: HTMLProps<HTMLElement>['className']
    textClass?: HTMLProps<HTMLElement>['className']
}
