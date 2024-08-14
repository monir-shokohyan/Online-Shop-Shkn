import Welcome from '../Welcome/Welcome'
import Sort from "../Sort/Sort"
import CardScreen from '../CardScreen/CardScreen'
import PaginatedItems from '../Pagination/Pagination'

function HomeMain() {
 
  
  return (
<>
    <Welcome/>
    <Sort/>
    <CardScreen/>
    <PaginatedItems itemsPerPage={20}/>
  

</>
    

  )
}

export default HomeMain