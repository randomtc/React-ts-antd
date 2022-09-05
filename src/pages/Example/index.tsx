import { FC, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from 'antd'
import type { DataType } from './types'
import CustomTable from '@/components/CustomTable'
import columns from './columns'
import SearchForm from './components/SearchForm'
import { EditModal } from './components/Modal'
import './index.less'
const Example: FC = () => {
    const [isAddModal, setIsAddModal] = useState<boolean>(false)//新增模态框
    //查询
    function onSearch(values: data) {
        const { title, type, ...vals } = values
    }
    //模态框提交
    function modalSub(values: data) {
        const { seletime, name, ...vals } = values
    }
    //添加表格
    function addTag(a: DataType) {
        console.log(a);
    }
    //表格数据
    const data: DataType[] = []
    for (let i = 0; i < 2; i++) {
        data.push({
            key: i,
            name: `Edrward ${i}`,
            age: 32,
            address: `London Park no. ${i}`,
            tags: ['cool', 'teacher'],
        })
    }

    return (
        <>
            <SearchForm onFinish={onSearch} />
            <Button
                onClick={() => setIsAddModal(true)}
                type='primary'
                style={{ margin: '15px 0' }}
            >
                新建
            </Button>
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
            <EditModal
                visible={isAddModal}
                onConfirm={vals => modalSub(vals)}
                onCancel={() => setIsAddModal(false)}
            />
        </>
    )
}

export default Example