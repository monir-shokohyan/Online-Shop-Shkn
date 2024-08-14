
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import ProductDescription from '../pages/ProductDescription'

function RoutesComp() {

  return (
   <BrowserRouter>
    <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<ProductDescription/>} path='/product/:id'/>
    </Routes>
   </BrowserRouter>
  )
}

export default RoutesComp
