export const phoneVerify = (_: any, value: number | string) => {
  if (!value) {
    return Promise.resolve()
  } else if (
    !/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(
      value + ""
    )
  ) {
    return Promise.reject(new Error("手机号格式不正确"))
  } else {
    return Promise.resolve()
  }
}

export const idCardVerify = (_: any, value: number | string) => {
  if (!value) {
    return Promise.resolve()
  } else if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value + "")) {
    return Promise.reject(new Error("身份证号码格式不正确"))
  } else {
    return Promise.resolve()
  }
}