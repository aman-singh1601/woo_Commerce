export const initialState={
    basket:[{
        id:'123',
        title:'HP 15s,11th Gen Intel Core i3-1115G4 8GB RAM/512GB SSD 15.6-inch(39.6 cm) Micro-Edge Anti-Glare FHD Laptop',
        price:11.96,
        rating:5,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqU-i58AvUS66asD72i1Wrz62FqrkAIGJwWK87AwvpS8N33svs6wMoIveb-7vTRZFvhco&usqp=CAU'
    },
    {
        id:'123',
        title:'HP 15s,11th Gen Intel Core i3-1115G4 8GB RAM/512GB SSD 15.6-inch(39.6 cm) Micro-Edge Anti-Glare FHD Laptop',
        price:11.96,
        rating:5,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqU-i58AvUS66asD72i1Wrz62FqrkAIGJwWK87AwvpS8N33svs6wMoIveb-7vTRZFvhco&usqp=CAU'
    }]
}

const  reducer=(state,action)=>{
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket:[...state.basket,action.item]
            }
            
        case 'REMOVE_FROM_BASKET':
            return {
                state
            }
            
        default :
            return state;            
    }
}

export default reducer;