export const categoryFunc = async (category) => {
    if(category){

        try{

            let response=await fetch(`https://dummyjson.com/products/category/${category}`)
            response=await response.json()
            if(response){
                return {response,category}
            }
        }catch(error){
            console.error(error.message)
        }
    }else{
        return null
    }
};
