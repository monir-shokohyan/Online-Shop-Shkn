
import { Provider } from 'react-redux'
import './App.css'
import RoutesComp from './routes/Routes'
import store from './Redux/Store/Store'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <Provider store={store} >

    <RoutesComp/>

    </Provider>
  )
}

export default App
