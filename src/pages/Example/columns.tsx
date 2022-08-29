import { Space, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import type { DataType } from './types'
interface dataFun {
    addTag: (data: DataType) => void
}
const Columns = ({ addTag }: dataFun): ColumnsType<DataType> => [
    {
        title: '姓名', dataIndex: 'name',
        render: text => <a>{text}</a>,
    },
    { title: '年龄', dataIndex: 'age' },
    { title: 'Address', dataIndex: 'address'},
    {
        title: 'Tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
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
export default Columns