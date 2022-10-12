import { useEffect, useState } from 'react'
const useGetData = <T,>(
    getData: any,
    oSrchObj: SrchData | null = null,
    isGetData: boolean | null = null,
) => {
    const [data, setData] = useState<ResData<T>>()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        getList()
    }, [oSrchObj, isGetData])
    async function getList() {
        try {
            setLoading(true)
            const res: Res<T> = await getData(oSrchObj)
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
    return [data, loading] as [ResData<T>, boolean]
}
export default useGetData