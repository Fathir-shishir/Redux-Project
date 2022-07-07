import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { Provider } from 'react-redux';
import store from './Store/Store';
import { Routes, Route, Link } from "react-router-dom";
import  Navbar from './Components/Navbar'
import Cart from './Components/Cart';
function App() {
  return (
    <Provider store={store}>
        <div >
        <Navbar></Navbar>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart></Cart>} />
     
      </Routes>
   
    </div>
    </Provider>
  
  );
}

export default App;
