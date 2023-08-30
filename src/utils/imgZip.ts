//图片压缩
/**
* 图片压缩（利用canvas）
* @param  path          图片链接(这里用的是base64格式)
* @param  quality       压缩配置quality，不传则按比例压缩，默认0.5
*/
export default function ImgZip(path: string, quality = 0.5) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = path
        img.onload = function () {
            // 默认按比例压缩
            let w = img.width
            let h = img.height
            const scale = w / h
            w = w > 300 ? w * quality : w
            h = w > 300 ? w / scale : h

            //生成canvas
            const canvas = document.createElement('canvas')
            const ctx = canvas.getContext('2d')
            canvas.width = w
            canvas.height = h
            ctx?.drawImage(img, 0, 0, w, h)

            //图片blob格式
            // canvas.toBlob(blob => {
            //     console.log(blob);
            // }, "image/jpeg", quality)

            //返回base64的值 可以设置压缩后格式png jpg...
            const base64 = canvas.toDataURL('image/jpeg', quality)
            //成功后的回调
            resolve({
                code: 1,
                base: base64,
            })
        }
    })
} 