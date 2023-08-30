import { useState, useRef } from 'react'
import { Select } from 'antd'
import { getUserData } from '@/api/devicelist'
import type { SelectProps } from 'antd'
import { useSelector } from 'react-redux'
const Index = ({ onSelect }: any) => {
    const org_id = useSelector<any>(state => state.user.cur_id)
    const [data, setData] = useState<SelectProps['options']>([])
    const [value, setValue] = useState<string>()
    const timeout: any = useRef()
    const getData = (value: string, callback: Function) => {
        //防抖
        if (timeout.current) {
            clearTimeout(timeout.current)
            timeout.current = null
        }
        timeout.current = setTimeout(netWork, 300)

        async function netWork() {
            const res = await getUserData({ name: value, org_id })
            if (res?.code === 200) {
                const data = res?.data?.map((item: any) => ({
                    value: item?.id,
                    label: item?.name + ' - ' + item?.address,
                    ...item
                }))
                callback(data)
            }
        }
    }
    const handleSearch = (newValue: string) => {
        if (newValue) {
            getData(newValue, setData)
        } else {
            setData([])
        }
    }
    const handleChange = (newValue: string, option: any) => {
        setValue(newValue)
        onSelect(data?.find((item: any) => item?.id === option?.value))
    }
    return (
        <Select
            placeholder="请输入关键词搜索"
            showSearch
            value={value}
            style={{ width: '100%' }}
            defaultActiveFirstOption={false}
            showArrow={false}
            filterOption={false}
            onSearch={handleSearch}
            onChange={handleChange}
            notFoundContent={null}
            options={data}
        />
    )
}

export default Index
