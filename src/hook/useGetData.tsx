//如果想跳过isGetData参数将其设置为null
import { useEffect, useState } from 'react'
const useGetData = <T,>(
    getData: any,
    isGetData: boolean | null = null,
    oSrchArr: SrchData | null = null
) => {
    const [data, setData] = useState<ResData<T>>()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        getList()
    }, [isGetData, oSrchArr])
    async function getList() {
        try {
            setLoading(true)
            const res: Res<T> = await getData(oSrchArr)
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