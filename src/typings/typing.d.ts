type Data = { [k: string]: any }

declare interface FormItemType {
    name: string
    label?: string
    required?: boolean
    message?: string
    placeholder?: string
}

declare type IsBool = Record<string | number | symbol, boolean>

declare type SrchObj = Record<string | number | symbol, unknown>

declare interface SearcnFormProps { onFinish?: (val: any) => void }

declare interface ModalProps {
    visible: boolean
    onConfirm: (vals: any) => void
    onCancel: () => void
}