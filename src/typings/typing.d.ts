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


//网络请求接口返回数据
declare type Res<T> = {
    code?: number
    status?: number
    message?: string
    data: {
        data: T[]
        total: number
        [k: string]: any
    }
    [k: string]: any
}

declare type ResData<T> = {
    data: T[],
    total?: number
    [k: string]: any
}