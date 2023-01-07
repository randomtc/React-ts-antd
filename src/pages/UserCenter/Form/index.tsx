import { FC, useEffect } from 'react'
import { CloseCircleOutlined, PlusOutlined } from "@ant-design/icons"
import { Link, useNavigate } from 'react-router-dom'
import { Form, Input, Button, message, InputNumber, DatePicker, Space, TimePicker } from 'antd'
import { phoneVerify, idCardVerify } from '@/utils/verify'
const Index: FC = () => {
    const navigate = useNavigate()
    const [form] = Form.useForm()
    useEffect(() => {
        //数据赋值
    }, [])
    function onFinish() {
        form
            .validateFields()//调用表单提交
            .then(async (values: any) => {
                console.log(values);

            })
            .catch(err => {
                err?.errorFields[0]?.errors[0] &&
                    message.error(err?.errorFields[0]?.errors[0])
            })
    }
    return (
        <Form
            form={form}
            style={{ width: "30vw" }}
        >

            <Form.Item
                label="身份证号"
                name="id_card"
                rules={[
                    { required: true, message: "请输入身份证号!" },
                    { validator: idCardVerify }
                ]}
            >
                <Input placeholder="请输入" />
            </Form.Item>

            <Form.Item label="手机号"
                name="phone"
                rules={[
                    { required: true, message: "请输入手机号!" },
                    { validator: phoneVerify }
                ]}>
                <Input placeholder='请输入关键字' />
            </Form.Item>

            {/* parser设置数字输入框只能为整数 */}
            <Form.Item
                label="年龄"
                name="age"
                rules={[{ required: true, message: "请输入年龄!" }]}
            >
                <InputNumber
                    min={1}
                    parser={(val: any) => (val.indexOf(".") > -1 ? parseInt(val) : val)}
                    placeholder="请输入"
                />
            </Form.Item>

            <Form.Item name="status" label="时间">
                <DatePicker />
            </Form.Item>

            <Form.List name="mealtime">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, ...restField }) => (
                            <Space key={key} style={{ display: "flex" }} align="baseline">
                                <Form.Item
                                    label="用餐时间"
                                    {...restField}
                                    name={[name, "name"]}
                                    rules={[{ required: true, message: "请输入" }]}
                                >
                                    <Input placeholder="名称" />
                                </Form.Item>
                                <Form.Item
                                    {...restField}
                                    name={[name, "time"]}
                                    rules={[{ required: true, message: "请选择" }]}
                                >
                                    <TimePicker.RangePicker format={"HH:mm"} />
                                </Form.Item>
                                <CloseCircleOutlined onClick={() => remove(name)} />
                            </Space>
                        ))}
                        <Form.Item label="  " colon={false}>
                            <Button
                                type="dashed"
                                onClick={() => add()}
                                block
                                icon={<PlusOutlined />}
                            >
                                添加用餐时间
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>


            <Button type="primary" htmlType="submit" onClick={onFinish}>
                提交
            </Button>
            <Button onClick={() => form.resetFields()}  >
                清除
            </Button>



        </Form>
    )
}
export default Index