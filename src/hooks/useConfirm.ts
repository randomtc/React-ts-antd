import { useEffect, useState } from 'react'
import { message } from 'antd'
const Index = () => {
    const [obj, setConfirm] = useState<any>({
        req: () => { }, //网络请求
        subData: {}, //请求参数
        fun: () => { }, //成功后的操作
        tip: null, //提示信息
    })
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        if (Object.keys(obj?.subData).length) {
            sendReq()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [obj])
    async function sendReq() {
        try {
            setLoading(true)
            const res: Resolve = await obj?.req(obj?.subData)
            if (res?.code === 200) {
                obj?.fun()
                message.success(obj?.tip ?? '操作成功')
                setLoading(false)
            } else {
                console.error(res)
                setLoading(false)
            }
        } catch (err) {
            console.error(err)
            setLoading(false)
        }

    }

    return [setConfirm, loading] as any
}

export default Index
