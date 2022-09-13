import { Space } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import type { TableData } from './types'
interface FunType {
    addTag: (data: TableData) => void
}
const columns = ({ addTag }: FunType): ColumnsType<TableData> => [
    {    title: '姓名', dataIndex: 'name',
        render: text => <a>{text}</a>,
    },
    { title: '电话', dataIndex: 'card_number' },
    { title: '性别', dataIndex: 'is_arrive' },

    {
        title: 'Action',
        render: (data) => (
            <Space size="middle" onClick={() => addTag(data)}>
                <a>Invite {data.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];
export default columns