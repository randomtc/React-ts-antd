/*
networkReq:封装好的网络请求
addParame：需要添加的额外请求参数

返回值
parame:网络请求参数
setParame：改变参数配合useEffect重新请求 (例如：搜索查询)
data：成功后的数据
isSendReq, setSendReq：是否重新请求的开关
loading：请求过程的状态
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
