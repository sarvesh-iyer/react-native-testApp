export interface TextProps {
    children: string,
    type: 'heading' | 'para' | 'big' | 'medium' | 'small',
    weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'
}
