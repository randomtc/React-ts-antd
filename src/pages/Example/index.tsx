import { FC, useEffect, useState } from 'react'
import { Button } from 'antd'
import SearchForm from './components/SearchForm'
import CustomTable from '@/components/CustomTable'
import EditModal from './components/EditModal'
import columns from './components/columns'
import { getAdminList } from '@/api'
import { type TableData } from './types'
import './index.less'
const Example: FC = () => {
    const [tableData, setTableData] = useState<ResData<TableData>>()
    const [oBool, setBool] = useState<IsBool>({
        isAddModal: false,//新增
        isOpen: false
    })
    const [oSrch, setSrch] = useState<SrchObj>({ page: 1, pageSize: 10 })

    useEffect(() => {
        getAdminData()
    }, [])

    //获取表格信息
    async function getAdminData() {
        const res: Res<TableData> = await getAdminList()
        if (res?.code === 0) setTableData(res?.data)
    }

    //查询
    function onSearch(values: Partial<TableData>) {
        const { name, ...vals } = values
        setSrch({ ...vals, page: 1, pageSize: oSrch.pageSize })
    }

    //模态框提交
    function modalSub(values: TableData) {
        const { seletime, name, ...vals } = values
    }

    //添加表格
    function addTag(a: TableData) {
        console.log(a);
    }

    //表格数据
    const data: TableData[] = tableData!?.data?.map(item => {
        const { id, is_arrive, ...vals } = item
        return {
            ...vals,
            key: id,
            is_arrive: is_arrive ? '男' : '女',
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
                dataSource={data}
                columns={columns({ addTag })}
                pagination={{
                    total: tableData?.total,
                    onChange: (page, pageSize) => setSrch({ ...oSrch, page, pageSize })
                }}
            />
            <EditModal
                open={oBool.isAddModal}
                onConfirm={modalSub}
                onCancel={() => setBool({ ...oBool, isAddModal: false })}
            />
        </>
    )
}

export default Example