import React from "react";

const Item = (props) => {
    return (
        <div>
            <img src={props.image} alt=""/>
            <p>{props.name}</p>
            <div className='flex gap-5'>
                <div>${props.new_price}</div>
                <div className='line-through opacity-40'>${props.old_price}</div>
            </div>
        </div>
    )
}

export default Item;
