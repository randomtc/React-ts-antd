import useGetSeleList from './useGetSeleList'
import { getAdressData, getSeleData } from '@/api/index'
import { getReform } from '@/api/remouldlist'
import { getList as InsitutionList } from '@/api/reforminstitutionlist'

//获取省市区数据
export const useGetAdressData = () => useGetSeleList(getAdressData)

//获取下拉选择框数据
export const useGetSeleData = () => useGetSeleList(getSeleData)

//改造内容
export const useGetReform = (obj: any) => useGetSeleList(getReform, obj)

//机构列表
export const useGetInsitution = (obj: any) => useGetSeleList(InsitutionList, obj)

export { default as useGetData } from './useGetData'
export { default as useConfirm } from './useConfirm'

