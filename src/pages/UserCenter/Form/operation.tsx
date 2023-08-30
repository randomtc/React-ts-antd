import { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
const Operation: FC = () => {
    const location = useLocation()
    useEffect(() => {
        // console.log(location);
    }, [])

    return (
        <div>Operation</div>
    )
}

export default Operation