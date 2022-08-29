import React from 'react'
import loading from './loading.gif'
const Spinner = () => {
    return (
        <div className='text-center'>
            <img src={loading} width="100px" alt='load' />
        </div>
    )
}
export default Spinner