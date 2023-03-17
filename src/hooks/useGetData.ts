/**
* 函数参数
* @param  networkRequest   网络请求
* @param  addParams        添加参数
* 返回参数
* @returnParams
* @param  parame           请求参数
* @param  setParame        设置参数
* @param  data             请求成功数据
* @param  trigger          重新请求的开关
* @param  loading          请求状态
*/
import { useEffect, useState } from 'react'

type ResData<T> = {
    data: T[]
    total?: number
    [k: string]: any
}

type Res<T> = {
    code: number
    data: ResData<T>
    message?: string
    [k: string]: any
}

const useGetData = <T>(networkRequest: any, addParams?: Record<string, any>) => {
    const [data, setData] = useState<ResData<T>>()
    const [params, setParams] = useState<Record<string, any>>({ page: 1, page_size: 10 })
    const [trigger, setTrigger] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        sendRequest()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params, trigger])

    async function sendRequest() {
        setLoading(true)
        try {
            const res: Res<T> = await networkRequest({ ...params, ...addParams })
            if (res?.code === 200) {
                setData(res?.data)
            } else {
                console.error(res)
            }
        } catch (err) {
            console.error(err)
        }
        setLoading(false)
    }

    return { params, setParams, data, trigger, setTrigger, loading }
}

export default useGetData
