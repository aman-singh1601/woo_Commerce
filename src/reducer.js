import { useEffect } from "react";

export const initialState={
    basket:[]
}

export const subBasketTotal=(basket)=> {

    var amount=0
    basket.forEach(element => {
        amount=amount+element.price;
    });
    return amount;
}

const  reducer=(state,action)=>{
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket:[...state.basket,action.item]
            }
            
        case 'REMOVE_FROM_BASKET':
            let newBasket=[...state.basket];
            const index=state.basket.findIndex((basketItem)=>basketItem.id==action.id)
            if(index>=0){
                newBasket.splice(index,1);

            }else{
                console.warn('cant remove the product')
            }
            return {
                ...state,
                basket:newBasket
            }
            
        default :
            return state;            
    }
}

export default reducer;