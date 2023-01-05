import React, { lazy, Suspense } from "react"
import { useRoutes, Navigate } from 'react-router-dom'
import { lazyFix } from "./fixLazyLoad"
export type RouterType = {
    path?: string
    index?: boolean
    element?: React.ReactNode
    children?: RouterType[]
    caseSensitive?: boolean
    pover?: boolean
    label?: string
    icon?: any,
    component?: React.LazyExoticComponent<any>
}
export const routers: RouterType[] = [
    { path: '', element: <Navigate to='login' /> },
    { path: 'login', component: lazy(() => import('@/pages/Login')) },
    {
        component: lazy(() => import('@/Layout')),
        children: [
            {
                path: 'usercenter',
                label: '用户中心',
                icon: 'icon-fdj',
                children: [
                    {
                        path: 'form',
                        label: 'Form表单',
                        icon: 'icon-fdj',
                        component: lazy(() => lazyFix(() => import('@/pages/UserCenter/Form')))
                    },
                    {
                        path: 'chr1/add',
                        component: lazy(() => lazyFix(() => import('@/pages/UserCenter/Form/operation')))
                    },
                    {
                        path: 'chr1/edit',
                        component: lazy(() => lazyFix(() => import('@/pages/UserCenter/Form/operation')))
                    },
                    {
                        path: 'example',
                        label: '示例',
                        component: lazy(() => lazyFix(() => import('@/pages/Example')))
                    },
                    {
                        path: 'san',
                        label: '三级',
                        children: [
                            {
                                path: 'chr3',
                                label: '测试3',
                                icon: 'icon-fdj',
                                component: lazy(() => lazyFix(() => import('@/pages/Login')))
                            },

                        ]
                    },
                ]
            },
            {
                path: 'useredit',
                label: '用户编辑',
                component: lazy(() => lazyFix(() => import('@/pages/UserEdit')))
            },

            // { path: 'nopermission', element: <NoPermission /> },
        ]
    },
]

function dataDispose(arr: RouterType[]) {
    const setElement = (Child: React.LazyExoticComponent<any>) => <Child />
    const routerArr: RouterType[] = []
    for (let i = 0; i < arr.length; i++) {
        const { element, component, children, icon, label, ...vals } = arr[i]
        routerArr.push({
            ...vals,
            element: element ? element : component && setElement(component),
            children: children && dataDispose(children)
        })
    }
    return routerArr
}
export default function AppRouter() {
    return (
        <Suspense fallback={<>loading</>}>
            {useRoutes(dataDispose(routers))}
        </Suspense>
    )
}
