import React, { useEffect, useState } from 'react'

const useScrollY = () => {
    const [scrollY, setScrollY] = useState(0)

    useEffect(
        () => {
            const handleScroll = () => {
                setScrollY(window.pageYOffset);
            }

            window.addEventListener('scroll', handleScroll)
            return () => window.removeEventListener('scroll', handleScroll1)
        }, []
    )

    return scrollY;
}

export default useScrollY;