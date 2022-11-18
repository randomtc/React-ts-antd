import { FC, useEffect, useState } from 'react'
import { Button, message } from 'antd'
import SearchForm from './components/SearchForm'
import CustomTable from '@/components/CustomTable'
import EditModal from './components/EditModal'
import columns from './components/columns'
import { getAdminList } from '@/api'
import useGetData from '@/hooks/useGetData'
import { type TableData } from './types'
import './index.scss'
const Example: FC = () => {
    const [oBool, setBool] = useState<IsBool>({
        isAddModal: false,//新增
        isOpen: false,
    })

    const [oSrch, setSrch, tableData, isSendReq, setSendReq, loading] = useGetData<TableData>(getAdminList)
    //查询
    function onSearch(values: Partial<TableData>) {
        const { name, ...vals } = values
        // 对参数的处理
        setSrch({ ...vals, page: 1, pageSize: oSrch.pageSize })
    }

    //模态框提交
    function modalSub(values: TableData) {
        const { seletime, name, ...vals } = values
        // 对参数的处理

    }

    //添加表格
    function addTag(a: TableData) {
        console.log(a);
    }



    //表格数据
    const data: TableData[] = tableData?.data?.map(item => {
        const { id, is_arrive, ...vals } = item
        return {
            ...vals,
            key: id,
            is_arrive: is_arrive ? '男' : '女',
        }
    })


    return (
        <>
            {/* <div className='test'> */}
            <SearchForm onFinish={onSearch} />
            {/* </div> */}

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
                    current: oSrch.page,
                    onChange: (page, pageSize) => {
                        console.log({ page });
                        setSrch({ ...oSrch, page, pageSize })
                    }
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