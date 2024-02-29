import React from "react";

const Item = (pros) => {
    return (
        <div>
            <img src={pros.image} alt=""/>
            <p>{pros.name}</p>
            <div className='flex gap-5'>
                <div>${this.props.new_price}</div>
                <div className='line-through opacity-40'>${this.props.old_price}</div>
            </div>
        </div>
    )
}

export default Item;
