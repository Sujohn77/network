import React, {useState,useEffect} from "react";
import "./Paginator.css"

export const Paginator = ({pageCurrent,OnPageChanged,totalCount,pageSize}) =>{
    let [leftBorder,setleftBorder] = useState(1);
    let [rightBorder,setrightBorder] = useState(10);

    let pagesCount = Math.ceil(totalCount / pageSize);

    let [leftPages,setLeftPages] = useState(pagesCount);

    useEffect(()=>{
        setLeftPages(pagesCount);
    },[totalCount])

    let pages = [];
    for(let i = 1;i <= pagesCount;i++)
        pages.push(i);

    let lastPages = () =>{
        setleftBorder(leftBorder - 10  );
        setrightBorder(rightBorder - 10);
        setLeftPages(leftPages + 10);
        OnPageChanged(leftBorder- 10);
    };
    let nextPages = () =>{
        setleftBorder(leftBorder + 10 );
        setrightBorder(rightBorder + 10 );
        setLeftPages(leftPages - 10);
        OnPageChanged(leftBorder+10);
    };
    return <div className="pagination">
        {leftBorder > 0 && <span className="arrow" onClick={lastPages}>{"<"}</span>}
        <div className="list__pages">
        {
            leftPages > 10 && pages
                .filter(p => p >= leftBorder && p <= rightBorder)
                .map(p => {
                return <span className={pageCurrent === p && "active__page"} onClick={() => {OnPageChanged(p)}}>{p}</span>
            })
        }
            {
                leftPages < 10 && pages
                    .filter(p => p >= leftBorder && p <= leftBorder + leftPages -1)
                    .map(p => {
                        return <span className={pageCurrent === p && "active__page"} onClick={() => {
                            OnPageChanged(p)
                        }}>{p}</span>
                    })
            }
        </div>
        {rightBorder < pagesCount && <span className="arrow" onClick={nextPages}>{">"}</span>}
    </div>
}