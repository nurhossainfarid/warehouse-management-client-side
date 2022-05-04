import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login/Login';
import Registration from './Pages/Login/Registration/Registration';
import Inventory from './Pages/Home/Inventory/Inventory';
// import RequireAuth from './Pages/RequireAuth/RequireAuth'
import ItemsDetails from './Pages/Home/ItemsDetails/ItemsDetails';
import RequireAuth from './Pages/RequireAuth/RequireAuth';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/itemsDetails/itemID' element={
            <RequireAuth>
              <ItemsDetails></ItemsDetails>
            </RequireAuth>
        }></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
