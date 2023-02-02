import { Table, Pagination } from 'antd'
interface Props {
    dataSource: any
    columns: any
    scroll?: Record<string, number>
    loading?: boolean
    pagination?: {
        total: number | undefined
        current: number
        onChange?: (page: number, pageSize: number) => void
    }
}
export default function CustomTable(props: Props) {
    const { dataSource, loading, columns, scroll, pagination } = props
    return (
        <>
            <Table
                dataSource={dataSource}
                columns={columns}
                scroll={scroll ?? { x: 1200 }}
                pagination={false}
                loading={loading}
                sticky
            />
            {pagination && (
                <Pagination
                    total={pagination.total}
                    current={pagination.current}
                    onChange={(page, pageSize) => pagination.onChange!(page, pageSize)}
                    showSizeChanger={true}
                    showQuickJumper={true}
                    showTitle={true}
                    showTotal={total => `共 ${total} 条`}
                    style={{ textAlign: 'right', marginTop: 15 }}
                    pageSizeOptions={[10, 15, 20, 30]}
                />
            )}
        </>
    )
}
