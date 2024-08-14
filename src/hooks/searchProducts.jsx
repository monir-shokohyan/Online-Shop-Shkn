export const searchProducts = async (searchValue) => {
    if(searchValue){

        try {   
            let response = await fetch(`https://dummyjson.com/products/search?q=${searchValue}`);
            response = await response.json();
            if (response) {
                return {response,searchValue};
            }
        } catch (error) {
            console.error(error.message);
            
        }
    }else{
        
            let response=await fetch('https://dummyjson.com/products?limit=20');
            response=await response.json();
           if(response){
               return {response}
           }
       
          
    }
};
