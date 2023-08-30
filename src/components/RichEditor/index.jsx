import BraftEditor from "braft-editor"
import "braft-editor/dist/index.css"
import { Button, Upload } from "antd"
import { PictureOutlined } from "@ant-design/icons"
// import Upload from "../Upload"
import dayjs from "dayjs"

export default function RichEditor(props) {
  const controls = [
    "bold",
    // "font-size",
    "italic",
    // "underline",
    "text-color",
    "separator",
    "separator"
    // "text-align"
  ]

  // 处理图片上传请求后端接口
  const changeUpload = info => {
    props?.uploadChange(info)
  }

  // 富文本编辑器处理输入文字
  const handleChange = v => {
    props?.editorChange(v)
  }

  // 添加上传图片
  const extendControls = [
    {
      key: "antd-uploader",
      type: "component",
      component: (
        <Upload
          name="file"
          accept="image/*"
          showUploadList={false}
          onChange={changeUpload}
          action="/api/canteen/public/upload/image"
          data={{
            source: `editor/${dayjs().format("YYYY-MM")}/${dayjs().date()}`
          }}
        >
          <Button
            // type="button"
            className="control-item button upload-button"
            data-title="插入图片"
          >
            <PictureOutlined />
          </Button>
        </Upload>
      )
    }
  ]

  // 定义rem基准值
  const sizeBase = 23.4375
  // 定义输入转换函数
  const unitImportFn = (unit, type, source) => {
    // type为单位类型，例如font-size等
    // source为输入来源，可能值为create或paste
    // 此函数的返回结果，需要过滤掉单位，只返回数值
    if (unit.indexOf("rem")) {
      return parseFloat(unit, 10) * sizeBase
    } else {
      return parseFloat(unit, 10)
    }
  }

  // 定义输出转换函数
  const unitExportFn = (unit, type, target) => {
    if (type === "line-height") {
      // 输出行高时不添加单位
      return unit
    }

    // target的值可能是html或者editor，对应输出到html和在编辑器中显示这两个场景
    if (target === "html") {
      // 只在将内容输出为html时才进行转换
      return unit / sizeBase + "rem"
    } else {
      // 在编辑器中显示时，按px单位展示
      return unit + "px"
    }
  }
  return (
    <div
      className="editor-wrapper"
      style={{ border: "1px solid #B4B5B5", borderRadius: 6 }}
    >
      <BraftEditor
        contentStyle={{
          boxShadow: "inset 0 1px 3px rgba(0,0,0,.1)",
          height: props.height ?? 250
        }}
        className="my-editor"
        controls={controls}
        placeholder="请输入答案解析"
        extendControls={extendControls}
        value={BraftEditor.createEditorState(props?.content)}
        onChange={handleChange}
        converts={{ unitImportFn, unitExportFn }}
        readOnly={props.readOnly}
      />
    </div>
  )
}
