import React, { useState, useEffect } from 'react'

const usePagination = (currentBoard, scrollY, listLenght) => {
    const [page, setPage] = useState(1);

    useEffect(
        () => {
            if(currentBoard && currentBoard.clientHeight 
                && parseInt(scrollY) > currentBoard.clientHeight - 800 && (page * 20) == listLenght) 
            {
                setPage(page + 1);
            }

        }, [scrollY]
    )

    return page;
}

export default usePagination;