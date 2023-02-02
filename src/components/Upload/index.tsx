import { useEffect, useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'

import { Upload, message, Modal, Image } from 'antd'

const getBase64 = (file: any) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
    })

const UploadComponent = (props: any) => {
    const [previewVisible, setPreviewVisible] = useState(false)
    const [previewImage, setPreviewImage] = useState('')
    const [previewTitle, setPreviewTitle] = useState('')
    const [fileList, setFileList] = useState([])

    useEffect(() => {
        if (props.value && typeof props.value === 'string') {
            setFileList(props.value.split(',').map((item: string) => ({ url: item })))
        }
    }, [props.value])

    const handleCancel = () => setPreviewVisible(false)
    const handlePreview = async (file: any) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj)
        }
        setPreviewImage(file.url || file.preview)
        setPreviewVisible(true)
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
    }

    const handleChange = (info: any) => {
        const { fileList: newFileList } = info
        setFileList(newFileList)
        if (info?.file?.response?.code === 402) {
            message.error(info?.file?.response?.message)
            setTimeout(() => {
                setFileList(newFileList.slice(0, newFileList.length - 1))
            }, 500)
        } else {
            if (info.file.status === 'done') {
                setFileList(newFileList)
                props.onChange(
                    newFileList.map((item: any) => item?.response?.data?.url || item?.url)
                )
            }
        }
    }

    const handleOnRemove = (file: any) => {
        const newFileList = fileList.filter((item: any) => item.uid !== file.uid)
        setFileList(newFileList)
        props.onChange(newFileList.map((item: any) => item?.response?.data || item?.url))
    }

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div
                style={{
                    marginTop: 8
                }}
            >
                图片上传
            </div>
        </div>
    )
    return (
        <>
            <Upload
                action={`/api/family-bed/public/upload/image`}
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                onRemove={handleOnRemove}
                disabled={props.disabled}
                accept={props.accept ? props.accept : 'image/*'}
            >
                {props.disabled
                    ? null
                    : props.max
                    ? fileList.length >= props.max
                        ? null
                        : uploadButton
                    : uploadButton}
            </Upload>
            <Modal title={previewTitle} open={previewVisible} onCancel={handleCancel} footer={null}>
                <Image alt="image" src={previewImage} />
            </Modal>
        </>
    )
}

export default UploadComponent
