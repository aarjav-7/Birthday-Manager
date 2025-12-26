import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBday from './Components/AddBday';
import EditBday from './Components/EditBday'; 
import ViewProfile from './Components/ViewProfile'
import SendWish from './Components/SendWish';

function App() {
  return (
    <>
    <BrowserRouter>

    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/add' element={<AddBday/>}></Route>
      <Route path='/edit/:id' element={<EditBday/>}></Route>
      <Route path='/view/:id' element={<ViewProfile/>}></Route>
      <Route path='/upcoming' element={<h1>Upcoming</h1>}></Route>
      <Route path='/send' element={<SendWish/>}></Route>
    </Routes>
    
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
