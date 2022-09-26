import { useEffect, useState } from 'react'

const useGetData = <T,>(getData: any, oSrch: SrchData[] = []) => {
    const [data, setData] = useState<ResData<T>>()
    useEffect(() => {
        getList()
    }, oSrch)
    async function getList() {
        const res: Res<T> = await getData(oSrch)
        if (res?.code === 0) setData(res?.data)
    }
    return data
}

export default useGetData