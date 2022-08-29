import s from "./Paginator.module.css"

export default function Paginator({totalCount,pageSize, currentPage, onPageChanged}){
    let pagesCount = Math.ceil(totalCount / pageSize)
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return(
        <div>
            {pages.map(page => <span onClick={() => onPageChanged(page)} className={currentPage === page ? s.selectedPage : ""} key={page}>{page}</span>)}
        </div>
    )
}