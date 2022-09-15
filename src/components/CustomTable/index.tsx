import { Table, Pagination } from 'antd'
interface Props {
  dataSource: any
  columns: any
  scroll?: Record<string, number>
  pagination?: {
    total: number|undefined
    onChange?: (page: number, pageSize: number) => void
  } | false | null
}
export default function CustomTable(props: Props) {
  const {
    dataSource,
    columns,
    scroll,
    pagination
  } = props

  return (
    <>
      <Table
        dataSource={dataSource}
        columns={columns}
        scroll={scroll ?? { x: 1200 }}
        pagination={false}
        sticky
      />
      {pagination &&
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
      }

    </>
  )
}
