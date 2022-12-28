import React from 'react'
import Image from 'next/image'
import spinner from '../public/loading_icon.gif'


const Spinner = () => {
    
return (
    <>
        <Image className ='w-[200px] m-auto block' src={spinner} alt='loading....' />
    </>
)
    


}

export default Spinner