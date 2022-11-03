import { AppContext } from '../App';
import React from 'react'

export const useCard = () => {
    const {CartItems, SetCartItems} = React.useContext(AppContext);
    const TotalPrice = CartItems.reduce((sum, obj) => obj.price + sum, 0 );

    return { CartItems, SetCartItems, TotalPrice};
}


