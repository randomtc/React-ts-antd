//@ts-ignore
import style from './index.module.less'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

export default function Index() {
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <>
            <div className={style['error-page']}>
                <div className={style.errorWarp}>
                    <div className={style.image}>
                        <img src={require('@/assets/images/401.png')} alt="" />
                    </div>
                    <div className={style.textWarp}>
                        <h4 className={style.desc}>您没有权限访问该页面～</h4>
                        <Button
                            className={style.backBtn}
                            size="large"
                            type="dashed"
                            ghost
                            onClick={handleGoBack}
                        >
                            返回上一页
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
