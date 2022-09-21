declare interface FormItemType {
    name: string
    label?: string
    required?: boolean
    message?: string
    placeholder?: string
}

declare type IsBool = Record<string | number | symbol, boolean>

declare type SrchObj = Record<string | number | symbol, unknown>

declare interface FormProps<T> { onFinish?: (val: T) => void }

declare interface ModalProps {
    open: boolean
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

declare interface Resolve {
    code?: number
    message?: string
    [k: string]: any
}
