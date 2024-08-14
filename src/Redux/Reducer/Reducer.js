


const initial1=""
export const getProductReducer=(state=initial1,action)=>{
    switch (action.type){
        case "getProduct":
            return state=action.payload
        default:
            return state
    }

}