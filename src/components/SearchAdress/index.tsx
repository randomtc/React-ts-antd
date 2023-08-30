import { useEffect, useRef, useState } from "react"
import { DownOutlined } from "@ant-design/icons"
import { Input, Tree, AutoComplete, Spin } from "antd"
import { getAdressData, getRegions } from "@/api"
import adressFind from "@/utils/adressFind"
import "./index.less"
const Index = (props: any) => {
  const [adressData, setAdressData] = useState()
  const [options, setOptions] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const timeRef: any = useRef()
  useEffect(() => {
    getAdrData()
  }, [])
  async function getAdrData(obj?: any) {
    setLoading(true)
    const res = await getAdressData(obj)
    if (res?.code === 200) {
      setAdressData(dataProcess(res?.data))
      setLoading(false)
    }
  }

  //tree数据处理
  const dataProcess = (data: Record<string, any>) =>
    data?.map((item: any) => ({
      title: item?.name,
      key: item?.id,
      disabled: item?.level !== 3,
      children: item?.children && dataProcess(item?.children)
    }))

  //自动补全
  const onChangeSearch = async (value: string) => {
    if (value) {
      value && setOptions([{ label: "搜素中" }])
      //防抖 如果存在定时器就清空
      timeRef.current && clearTimeout(timeRef.current)
      timeRef.current = setTimeout(getData, 400)
    } else {
      setOptions([{}])
    }

    async function getData() {
      const res = await getRegions({ name: value })
      const data = res?.data?.map((item: Record<string, string>) => ({
        label: item?.name,
        value: item?.name
      }))
      setOptions(data)
    }
  }

  const onSerchSelect = async (name: string) => {
    const res = await getRegions({ name })
    getAdrData(res?.data?.[0])
  }

  //获取树形选择父级信息
  const getParentNode = (key: any, tree: any): any => {
    let parentNode
    for (let i = 0; i < tree.length; i++) {
      const node = tree[i]
      if (node.children) {
        if (node.children.some((item: any) => item.key === key)) {
          parentNode = node
        } else if (getParentNode(key, node.children)) {
          parentNode = getParentNode(key, node.children)
        }
      }
    }
    return parentNode
  }

  return (
    <div id="SearchAdress">
      <div className="left">
        <div className="title">行政区划列表</div>
        <AutoComplete
          style={{ width: 200 }}
          options={options}
          onSelect={onSerchSelect}
          onSearch={onChangeSearch}
        >
          <Input.Search
            size="middle"
            placeholder="请输入关键词"
            enterButton="重置"
            allowClear
            onSearch={() => {
              getAdrData()
              setOptions([])
            }}
          />
        </AutoComplete>
        {loading ? (
          <div>
            <Spin style={{ margin: "200px 0 0 100px" }} />
          </div>
        ) : (
          <Tree
            style={{ marginTop: 10 }}
            showLine
            switcherIcon={<DownOutlined />}
            onSelect={selectKeys => {
              const area_id = selectKeys[0]
              const city_id = getParentNode(area_id, adressData)?.key
              const province_id = getParentNode(city_id, adressData)?.key
              props.onTreeSelect({ province_id, city_id, area_id })
            }}
            treeData={adressData}
          />
        )}
      </div>
      <div className="right">{props.children}</div>
    </div>
  )
}

export default Index
