import { Form, Input, DatePicker, InputNumber, Switch, Select } from 'antd'
import Upload from '@/components/Upload'
const { RangePicker } = DatePicker
const { Option } = Select
interface Iprops {
    form: any
    formConfigArray?: IItemArray[]
    layout?: 'inline' | 'horizontal' | 'vertical'
    isNotModal?: boolean //是否用于modal中 在modal中自动居中 在整个页面靠左 见于会员列表modal以及会员新增
    onFinish?: (...set: any) => void
    labelCol?: Record<string, number>
    wrapperCol?: Record<string, number>
}
interface IItemArray {
    name?: string
    label?: string
    type?: string
    option?: IOption[]
    config?: object
    valuePropName?: string //比如switch使用的是checked而不是value控制的状态 这时我们可以通过valuePropName把状态绑定到对应的属性上
    checked?: boolean
    rules?: any
    placeholder?: string
    tooltip?: string
    format?: string
    content?: React.ReactNode
}

interface IOption {
    label: string
    value: string | number
    disabled?: boolean
}

export default function EditFormComponent(props: Iprops) {
    const getComponents = (item: IItemArray) => {
        const value = item.type ? item.type : 'Input'
        switch (value) {
            case 'Search':
                return <Input.Search placeholder={item.placeholder} {...item.config} />
            case 'TextArea':
                return <Input.TextArea placeholder={item.placeholder} {...item.config} />
            case 'Upload':
                return <Upload {...item.config} />
            case 'InputNumber':
                return (
                    <InputNumber
                        style={{ width: '100%' }}
                        placeholder={item.placeholder}
                        {...item.config}
                    />
                )
            case 'Select':
                return (
                    <Select {...item.config} placeholder={item.placeholder}>
                        {item.option &&
                            item.option.map(mini => {
                                return (
                                    <Option
                                        value={mini.value}
                                        key={mini.value}
                                        disabled={mini?.disabled}
                                    >
                                        {mini.label}
                                    </Option>
                                )
                            })}
                    </Select>
                )
            case 'Switch':
                return <Switch {...item.config} />
            case 'DatePicker':
                return (
                    <DatePicker
                        style={{ width: '100%' }}
                        placeholder={item.placeholder}
                        {...item.config}
                    />
                )
            case 'RangePicker':
                return <RangePicker format="YYYY-MM-DD HH:mm:ss" {...item.config} />
            case 'Custom':
                return item?.content
            default:
                return <Input placeholder={item.placeholder} {...item.config} />
        }
    }
    // sm={24} md={24} lg={12} xl={8} xxl={6}
    return (
        <div className="form_edit_wrap">
            <Form
                form={props.form}
                labelAlign="right"
                labelCol={
                    props.labelCol
                        ? props.labelCol
                        : props.isNotModal
                        ? { span: 2 }
                        : { sm: 24, md: 24, lg: 6, xl: 6, xxl: 6 }
                }
                wrapperCol={
                    props.wrapperCol
                        ? props.wrapperCol
                        : props.isNotModal
                        ? { span: 7 }
                        : props.layout === 'vertical'
                        ? { sm: 24, md: 24, lg: 24, xl: 24, xxl: 24 }
                        : { sm: 24, md: 24, lg: 14, xl: 14, xxl: 14 }
                }
                layout={props.layout ? props.layout : 'horizontal'}
            >
                {props.formConfigArray &&
                    props.formConfigArray.map((item, index) => {
                        return (
                            <Form.Item
                                key={index}
                                name={item.name}
                                label={item.label}
                                valuePropName={item.valuePropName}
                                rules={item.rules}
                                tooltip={item.tooltip}
                            >
                                {getComponents(item)}
                            </Form.Item>
                        )
                    })}
            </Form>
        </div>
    )
}
