//监听窗口 元素尺寸变化 动态设置 table高度
import { useEffect, useState } from 'react'
const useSetScroll = () => {
    const [socrllObj, setScorllObj] = useState<Record<string, string>>()

    useEffect(() => {
        const resizeDom = new ResizeObserver(() => {
            setScroll()
        })
        const listenDom = document.getElementById('outletSearch')
        listenDom && resizeDom?.observe(listenDom) //监听元素尺寸变化
        window.addEventListener('resize', setScroll) //监听窗口元素变化
        return () => {
            resizeDom?.disconnect()
            window.removeEventListener('resize', setScroll)
        }
    }, [])

    function setScroll() {
        const menuWidth = document.getElementById('menu')?.clientWidth ?? 0
        const outleTopHeight = document.getElementById('outletTop')?.clientHeight ?? 0
        const searchHeight = document.getElementById('outletSearch')?.clientHeight ?? 0
        let cutomVh
        if (document.body.clientWidth > 1800) {
            cutomVh = '72vh'
        } else if (document.body.clientWidth < 1600) {
            cutomVh = '68.2vh'
        }
        setScorllObj({
            x: `calc(80vw - ${menuWidth}px)`,
            y: `calc(${cutomVh} - ${outleTopHeight + searchHeight + 20}px)`
        })
    }
    return socrllObj
}

export default useSetScroll
