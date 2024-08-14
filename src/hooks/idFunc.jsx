export const idFunc = async (id) => {
    if(id){

        try{

            let response=await  fetch(`https://dummyjson.com/products/${id}`)
            response=await response.json()
            if(response){
                return response
            }
        }catch(error){
            console.error(error.message)
        }
    }else{
        return null
    }
};
