import { useEffect, useState } from 'react'
const useGetData = <T,>(getData: any, oSrch: SrchData[] = []) => {
    const [data, setData] = useState<ResData<T>>()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        getList()
    }, oSrch)
    async function getList() {
        setLoading(true)
        const res: Res<T> = await getData(oSrch)
        if (res?.code === 0){
            setData(res?.data)
            setLoading(false)
        } 
    }
    return [data, loading] as [ResData<T>,boolean]
}
export default useGetData