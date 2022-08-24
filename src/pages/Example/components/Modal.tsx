import { FC, useState } from 'react'
import { Space, Modal, Button, DatePicker, Form, Input } from 'antd'
export const EditModal: FC = () => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false)
    const [form] = Form.useForm()
    const { RangePicker } = DatePicker

    function confirmSub(vals: any) {
        console.log(vals);

    }

    return (
        <>
            <div>
                <Button
                    onClick={() => setIsModalVisible(true)}
                    type='primary'>
                    新建
                </Button>
            </div>

            <Modal onCancel={() => setIsModalVisible(false)}
                title="新增招生计划"
                visible={isModalVisible}
                footer={null}
            >
                <Form
                    onFinish={vals => confirmSub(vals)}
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
                            <Button onClick={() => setIsModalVisible(false)}>
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
