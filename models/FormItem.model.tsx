export interface FormItemModel {
    placeholder: string
    type?: string
    required?:boolean
    invalid?:boolean
    valid?: boolean 
    value?: string
    onFocus?: () => void
}