import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Assets/dropdown_icon.png"
import Item  from "../Components/Item/Item";
const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext);
    return (
        <div>
            <img src={props.banner}/>
            <div>
                <p>
                    <span>Showing 1-12</span> out of 39 products
                </p>
                <div>Sort by
                    <img className={'flex scale-75'} src={dropdown_icon}/>
                </div>
            </div>
            <div className={'grid grid-cols-4 gap-7 m-32'}>
                {all_product.map((item,i) => {
                    if (props.category===item.category){
                        return <Item
                            key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}/>
                    }else {
                        return null;
                    }
                })}
            </div>
        </div>
    )
}

export default ShopCategory;
