import { Space, Modal, Button, DatePicker, Form, Input } from 'antd'
export default function EditModal(props: ModalProps) {
    const { visible, onConfirm, onCancel } = props
    const [form] = Form.useForm()
    const { RangePicker } = DatePicker
    function cancel() {
        onCancel()
        form.resetFields()
    }
    return (
        <>
            <Modal
                onCancel={cancel}
                title="新增招生计划"
                visible={visible}
                footer={null}
            >
                <Form
                    onFinish={vals => onConfirm(vals)}
                    form={form}
                    layout="horizontal"
                    labelCol={{ span: 6 }}
                // wrapperCol={{ span: 16 }}
                >
                    <Form.Item
                        name="seletime"
                        label="招生时间"
                        rules={[{ required: true, message: '请选择招生时间' }]}>
                        <RangePicker />
                    </Form.Item>

                    <Form.Item
                        name="cultivate"
                        label="培训开始时间"
                        rules={[{ required: true, message: '请选择培训开始时间' }]}  >
                        <DatePicker />
                    </Form.Item>

                    <Form.Item
                        name="name"
                        label="课程名称"
                        rules={[{ required: true, message: '请输入课程名称' }]}>
                        <Input placeholder='请输入课程名称' />
                    </Form.Item>

                    <div style={{ textAlign: 'right' }}>
                        <Space>
                            <Button onClick={cancel}>
                                取消
                            </Button>
                            <Button type="primary" htmlType="submit">
                                确认
                            </Button>
                        </Space>
                    </div>

                </Form>
            </Modal>
        </>
    )
}
