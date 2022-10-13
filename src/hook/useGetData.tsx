import { useEffect, useState } from 'react'
const useGetData = <T,>(
    getData: any,
    isGetData: boolean | null = null,
) => {
    const [data, setData] = useState<ResData<T>>()
    const [oSrch, setSrch] = useState<SrchData>({ page: 1, pageSize: 10 })
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        getList()
    }, [oSrch, isGetData])
    async function getList() {
        try {
            setLoading(true)
            const res: Res<T> = await getData(oSrch)
            if (res?.code === 0) {
                setData(res?.data)
                setLoading(false)
            } else {
                //常见错误：例如约定的成功返回值code不为0
                console.error(res)
            }
        } catch (err) {
            console.error(err)
        }
    }
    return [data, oSrch, setSrch, loading] as [ResData<T>, SrchData, any, boolean]
}
export default useGetData