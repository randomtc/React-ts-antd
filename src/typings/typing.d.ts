type data = { [k: string]: any }

declare interface FormItemType {
    name: string
    label?: string
    required?: boolean
    message?: string
    placeholder?: string
}