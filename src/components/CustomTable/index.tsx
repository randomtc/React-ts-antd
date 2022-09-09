import { FC } from 'react'
import { Table, Pagination } from 'antd'
interface Props {
  dataSource: any
  columns: any
  pagination: {
    total: number
    onChange?: (page: number, pageSize: number) => void
  }
}
export default function CustomTable(props: Props) {
  const {
    dataSource,
    columns,
    pagination
  } = props
  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        scroll={{ x: 1200 }}
        pagination={false}
        sticky
      />
      <Pagination
        onChange={(page, pageSize) => pagination.onChange!(page, pageSize)}
        total={pagination.total}
        showSizeChanger={true}
        showQuickJumper={true}
        showTitle={true}
        showTotal={total => `共 ${total} 条`}
        style={{ textAlign: 'right', marginTop: 15 }}
        pageSizeOptions={[10, 15, 20, 30]}
      />
    </>
  )
}
