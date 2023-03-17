import { useEffect, useState } from 'react'
import { message } from 'antd'
const useConfirm = () => {
    const [confirm, setConfirm] = useState<Record<string, any>>({
        request: () => { }, //网络请求
        params: {}, //请求参数
        success: () => { }, //成功后的操作
        tip: null, //提示信息
    })
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        if (Object.keys(confirm?.subData).length) {
            sendRequest()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [confirm])
    async function sendRequest() {
        setLoading(true)
        try {
            const res: Resolve = await confirm?.request(confirm?.subData)
            if (res?.code === 200) {
                confirm?.afterSuccess()
                message.success(confirm?.tip ?? '操作成功')
            } else {
                console.error(res)
            }
        } catch (err) {
            console.error(err)
        }
        setConfirm({ subData: {} })
        setLoading(false)
    }
    return [setConfirm, loading] as [any, boolean]
}

export default useConfirm
