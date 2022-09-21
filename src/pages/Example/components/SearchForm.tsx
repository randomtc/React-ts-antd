import { Form, Input, Button, Select, Space } from 'antd'
import { type TableData } from '../types'
export default function SearchForm(props: FormProps<Partial<TableData>>) {
    const { onFinish } = props
    const [form] = Form.useForm()
    const formData: FormItemType[] = [
        { name: 'name', label: '题目', placeholder: '请输入关键字' },
        { name: 'card_number', label: '来源', placeholder: '请输入关键字' },
        { name: 'is_arrive', label: '题型', placeholder: '请选择题型' },

    ]
    function formContent(label: string, placeholder: string) {
        switch (label) {
            case '题目': return <Input placeholder={placeholder} />
            case '来源': return (
                <Select placeholder={placeholder}>
                    <Select.Option value={0}>政府端</Select.Option>
                    <Select.Option value={1}>机构端</Select.Option>
                </Select>
            )
            case '题型': return (
                <Select onChange={e => sss(e)} placeholder={placeholder}>
                    <Select.Option value={1}>单选</Select.Option>
                    <Select.Option value={2}>多选</Select.Option>
                    <Select.Option value={3}>简答题</Select.Option>
                    <Select.Option value={4}>判断题</Select.Option>
                    <Select.Option value={5}>案例分析题</Select.Option>
                </Select>
            )
        }
    }
    function sss(e: any) {
        console.log(e);
    }
    return (
        <Form
            onFinish={vals => onFinish!(vals)}
            form={form}
            layout="inline"
        >
            {formData.map((itm, idx) => (
                <Form.Item
                    key={idx}
                    name={itm.name}
                    label={itm.label}
                >
                    {formContent(itm.label!, itm.placeholder!)}
                </Form.Item>
            ))}
            <Form.Item>
                <Space>
                    <Button type="primary" htmlType="submit">
                        查询
                    </Button>
                    <Button onClick={() => form.resetFields()}>
                        清除
                    </Button>
                </Space>
            </Form.Item>
        </Form>
    )
}
