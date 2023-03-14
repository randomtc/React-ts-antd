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
const useGetData = <T,>(networkReq: any, addParams?: Record<string, any>) => {
    const [data, setData] = useState<ResData<T>>()
    const [params, setParams] = useState<SrchData>({ page: 1, page_size: 10 })
    const [isSendReq, setSendReq] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params, isSendReq])

    async function getData() {
        try {
            setLoading(true)
            const res: Res<T> = await networkReq({ ...params, ...addParams })
            if (res?.code === 200) {
                setData(res?.data)
                setLoading(false)
            } else {
                //常见错误：例如约定的成功返回值code不为0
                console.warn(res)
                setLoading(false)
            }
        } catch (err) {
            console.error(err)
            setLoading(false)
        }
    }

    return [params, setParams, data, isSendReq, setSendReq, loading] as [
        SrchData,
        any,
        ResData<T>,
        boolean,
        any,
        boolean
    ]
}
export default useGetData
