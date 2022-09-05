import { Form, Input, Button, Select, DatePicker, Space } from 'antd'
import './index.less'
interface Props {
    onFinish: (val: any) => void

}
const SearchForm = (props:Props) => {
    const {  onFinish } = props
    const { RangePicker } = DatePicker
    const [form] = Form.useForm()

    const formData: FormItemType[] = [
        { name: 'title', label: '题目', placeholder: '请输入关键字' },
        { name: 'come_from', label: '来源', placeholder: '请输入关键字' },
        { name: 'type', label: '题型', placeholder: '请选择题型' },
        { name: 'seletime', label: '创建时间', placeholder: '请选择时间' },
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
            case '创建时间': return <RangePicker />
        }
    }
    function sss(e: any) {
        console.log(e);
    }
    return (
        <Form
            onFinish={vals => onFinish(vals)}
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
export default SearchForm