import React, { lazy, Suspense } from 'react'
import { useRoutes, Navigate } from 'react-router-dom'
import { lazyFix } from './fixLazyLoad'
import { Spin } from 'antd'
import './index.less'
export type RouterType = {
    path?: string
    index?: boolean
    element?: React.ReactNode
    children?: RouterType[]
    caseSensitive?: boolean
    pover?: boolean
    label?: string
    icon?: any
    component?: React.LazyExoticComponent<any>
}
export const routers: RouterType[] = [
    { path: '', element: <Navigate to="login" /> },
    { path: 'login', component: lazy(() => import('@/pages/Login')) },
    {
        component: lazy(() => import('@/Layout')),
        children: [
            {
                path: 'staffmanage',
                label: '员工管理',
                icon: 'icon-staffmanage',
                component: lazy(() => lazyFix(() => import('@/pages/StaffManage')))
            },
            {
                path: 'oldmanmanage',
                label: '老人管理',
                icon: 'icon-oldmanmanage',
                component: lazy(() => lazyFix(() => import('@/pages/OldManManage')))
            },
            {
                path: 'devicemanage',
                label: '设备管理',
                icon: 'icon-devicemanage',
                children: [
                    {
                        path: 'devicealert',
                        label: '设备报警',
                        icon: 'icon-devicealert',
                        component: lazy(() =>
                            lazyFix(() => import('@/pages/DeviceManage/DeviceAlert'))
                        )
                    },
                    {
                        path: 'devicebind',
                        label: '设备绑定',
                        icon: 'icon-devicebind',
                        component: lazy(() =>
                            lazyFix(() => import('@/pages/DeviceManage/DecicveBind'))
                        )
                    },
                    {
                        path: 'devicegrant',
                        label: '设备发放',
                        icon: 'icon-devicegrant',
                        component: lazy(() =>
                            lazyFix(() => import('@/pages/DeviceManage/DeviceGrant'))
                        )
                    }
                ]
            }
        ]
    },
    {
        path: '/401',
        component: lazy(() => import('@/components/401'))
    },
    {
        path: '/404',
        component: lazy(() => import('@/components/404'))
    },
    {
        path: '*',
        component: lazy(() => import('@/components/404'))
    }
]

function dataDispose(arr: RouterType[]) {
    const setElement = (Child: React.LazyExoticComponent<any>) => (
        <Suspense
            fallback={
                <div id="firstPage">
                    <Spin tip="页面加载中..." size="large" />
                </div>
            }
        >
            <Child />
        </Suspense>
    )
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
    return useRoutes(dataDispose(routers))
}
