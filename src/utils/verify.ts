export const phoneVerify = (_: any, value: number | string) => {
  if (!value) {
    return Promise.resolve()
  } else if (
    !/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(
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