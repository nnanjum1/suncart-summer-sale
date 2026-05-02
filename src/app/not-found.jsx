import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div>
            <h2>Sorry the page is not found</h2>
            <Link href={'/'}>      <button className='btn' >go back home</button>
            </Link>
        </div>
    )
}

export default NotFound