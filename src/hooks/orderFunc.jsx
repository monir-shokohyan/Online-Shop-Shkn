export const orderFunc = async (sortOrder,skip) => {
    if(skip){

        try{   
            let response= await fetch(`https://dummyjson.com/products?limit=20&skip=${skip}&sortBy=title&order=${sortOrder}`)
            response= await response.json()
            if(response){
                return {response,sortOrder}
            }
        }catch(error){
            console.error(error.message)
        }
     
    }else{
        try{   
            let response= await fetch(`https://dummyjson.com/products?limit=20&sortBy=title&order=${sortOrder}`)
            response= await response.json()
            if(response){
                return {response,sortOrder}
            }
        }catch(error){
            console.error(error.message)
        }
    }
};
