import { FC, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from 'antd'
import type { TableData } from './types'
import CustomTable from '@/components/CustomTable'
import columns from './columns'
import SearchForm from './components/SearchForm'
import { EditModal } from './components/Modal'
import './index.less'
const Example: FC = () => {

    const [oBool, setBool] = useState<IsBool>({
        isAddModal: false,//新增
        isOpen: false
    })
    const [oSrch, setSrch] = useState<SrchObj>({ page: 1, pageSize: 10 })

    //查询
    function onSearch(values: Data) {
        const { title, type, ...vals } = values
        setSrch({ ...vals, page: 1, pageSize: oSrch.pageSize })
    }

    //模态框提交
    function modalSub(values: Data) {
        const { seletime, name, ...vals } = values
    }
    //添加表格
    function addTag(a: TableData) {
        console.log(a);
    }

    const data = [
        { id: 283, name: '张廷智', card_number: '011350137588', is_arrive: 2 },
        { id: 282, name: '张廷', card_number: '011349309588', is_arrive: 1 },
        { id: 281, name: '廷智', card_number: '011330381782', is_arrive: 2 },
        { id: 280, name: '张智', card_number: '011123271047', is_arrive: 1 },
    ]

    //表格数据
    const tableData: TableData[] = data.map(item => {
        const { id, is_arrive, ...vals } = item
        return {
            ...vals,
            key: id,
            is_arrive: is_arrive === 1 ? '男' : '女',
        }
    })

    return (
        <>
            <SearchForm onFinish={onSearch} />
            <Button
                onClick={() => setBool({ ...oBool, isAddModal: true })}
                type='primary'
                style={{ margin: '15px 0' }}
            >
                新建
            </Button>
            <CustomTable
                dataSource={tableData}
                columns={columns({ addTag })}
                pagination={{
                    total: 20,
                    onChange: (page, pageSize) => setSrch({ ...oSrch, page, pageSize })
                }}
            />
            <EditModal
                visible={oBool.isAddModal}
                onConfirm={modalSub}
                onCancel={() => setBool({ isAddModal: false })}
            />
        </>
    )
}

export default Example