import Mock from 'mockjs'
Mock.mock('/admin/list', 'get', {
    code: 0,
    status: 200,
    message: '请求成功',
    data:{
        'data|8': [{
            'id|+1': 0,
            name: '@cword(2,4)',
            card_number: '@number(1,6)',
            is_arrive: '@integer(0,1)',
        }],
        total:8
    },
})