import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 2500)
    }, [])
    
    return (
        <div>
            <h1>Looks like you're headed off into deep space, my friend</h1>
            <h2>There's no such country...</h2>
            <p>Go back to the <Link href="/">Homepage</Link></p>
        </div>
    )
}

export default NotFound;