import { FC } from 'react'
import { Form, Input, Button, Select, DatePicker, message, Row, Col, Space } from 'antd'
const Chr2: FC = () => {
  const { RangePicker } = DatePicker
  const [form] = Form.useForm()
  return (
    <Form
      // onFinish={onSearch}
      form={form}
      style={{ width: '60vw' }}
    >

      <Form.Item name="title" label="标题" >
        <Input placeholder='请输入关键字' />
      </Form.Item>


      <Form.Item name="seletime2" label="时间" >
        <RangePicker
        // style={{width:'100%'}}
        />
      </Form.Item>
      <Form.Item name="seletime" label="时间" >
        <DatePicker
        // style={{width:'100%'}}
        />
      </Form.Item>





    </Form>
  )
}

export default Chr2