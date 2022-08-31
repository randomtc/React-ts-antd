import { FC, useEffect, useId } from 'react'

const Chr1: FC = () => {
    const id = useId()
    useEffect(() => {
        console.log(id);
    }, [])

    return (
        <div>Chr1</div>
    )
}

export default Chr1