export default function getTime() {
    const extra = (x: number) => x < 10 ? '0' + x : x
    const date = new Date()
    const weekObj: { [k: number]: string } = {
        1: '星期一',
        2: '星期二',
        3: '星期三',
        4: '星期四',
        5: '星期五',
        6: '星期六',
        0: '星期日'
    }
    const week = weekObj[date.getDay()]
    const ymd = date.getFullYear() + '年' + extra(date.getMonth() + 1) + '月' + extra(date.getDate()) + '日'
    const hms = extra(date.getHours()) + ':' + extra(date.getMinutes()) + ':' + extra(date.getSeconds())
    return { week, ymd, hms }
}