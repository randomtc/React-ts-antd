/**
* @param  request     网络请求
* @param  params      请求参数
* @param  success     成功后的操作
* @param  tip         提示信息
* @param  loading     请求状态
*/
import { useEffect, useState } from 'react'
import { message } from 'antd'
const useConfirm = () => {
    const [confirm, setConfirm] = useState<Record<string, any>>({
        request: () => { },
        params: {},
        success: () => { },
        tip: null,
    })
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        if (Object.keys(confirm?.params).length) {
            sendRequest()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [confirm])
    async function sendRequest() {
        setLoading(true)
        try {
            const res: Resolve = await confirm?.request(confirm?.params)
            if (res?.code === 200) {
                confirm?.success()
                message.success(confirm?.tip ?? '操作成功')
            } else {
                console.error(res)
            }
        } catch (err) {
            console.error(err)
        }
        setConfirm({ params: {} })
        setLoading(false)
    }
    return [setConfirm, loading] as [(...set: any) => void, boolean]
}

export default useConfirm
