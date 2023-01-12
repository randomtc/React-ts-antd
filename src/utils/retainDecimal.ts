//保留num位小数
export default function retainDecimal(str: string, num: number) {
  const arr = str.split(".")
  if (arr.length > 1 && arr[1].length > num) {
    return arr[0] + "." + arr[1].substring(0, num)
  }
  return str as any
}
