import React from "react";
import './pagenation.css';


const Pagenation = ({totalPosts,postsPerPage,setCurrentPage})=>{
    let pages = [];
    for(let i=1;i<= Math.ceil(totalPosts/postsPerPage);i++){
        pages.push(i)
    }

   
    return(
        <div className="btnbody">
            {pages.map((page,index)=>{
                return <button className="pagenabtn hoverbtn" key={index} onClick={()=> setCurrentPage(page)} >{page}</button>
            })}
        </div>
    ); 
};
export default Pagenation