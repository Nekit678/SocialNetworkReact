import s from "./Paginator.module.css"
import { useState } from 'react';
import { useEffect } from 'react';

export default function Paginator({ totalCount, pageSize, currentPage, onPageChanged }) {
    const [part, setPart] = useState(1)

    useEffect(() => {
        for (let i = currentPage; true; i++) {
            if (!(i % pageSize)) {
                setPart(i / pageSize);
                break
            }
        }
    }, [currentPage])

    let pagesCount = Math.ceil(totalCount / pageSize)
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }



    return (
        <div>
            <p></p>
            <button onClick={() => {if (part!==1)setPart(part-1)}}>Prev</button>
            {pages.filter((item) => { return ((part - 1) * pageSize + 1 <= item) && ((part * pageSize >= item)) }).map(page => <span onClick={() => onPageChanged(page)} className={currentPage === page ? s.selectedPage : s.page} key={page}>{page}</span>)}
            <button onClick={() => setPart(part+1)}>Next</button>
        </div>
    )
}