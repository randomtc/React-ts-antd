import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import type { DataType } from './types'
import CustomTable from '@/components/CustomTable'
import columns from './components/columns'
import SearchForm from './components/SearchForm'
import {EditModal} from './components/Modal'
import './index.less'
const Example: FC = () => {
    const location = useLocation()
    function onSearch(vals: any) {
        console.log(vals);
    }
    const data: DataType[] = [];
    for (let i = 0; i < 10; i++) {
        data.push({
            key: i,
            name: `Edrward ${i}`,
            age: 32,
            address: `London Park no. ${i}`,
            tags: ['cool', 'teacher'],
        });
    }
    function addTag(a: DataType) {
        console.log(a);
    }
    return (
        <>
            <SearchForm onFinish={onSearch} type={location?.pathname} />
            <EditModal/>
            <CustomTable
                dataSource={data}
                columns={columns({ addTag })}
                pagination={{
                    total: 20,
                    onChange: (page, pageSize) => {
                        console.log(page, pageSize);
                    }
                }}
            />    
        </>
    )
}

export default Example