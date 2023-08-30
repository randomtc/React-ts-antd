import { useEffect, useState } from 'react'
const useGetSeleList = (req: any, addParams?: any) => {
  const [data, setData] = useState<any>()
  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  async function getData() {
    const res = await req({ ...addParams })
    res?.code === 200 && setData(res?.data)
  }
  return data
}

export default useGetSeleList
