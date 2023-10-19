import './App.css';
import NavBar from "./components/NavBar/NavBar/";
import { Routes, Route, useLocation } from "react-router-dom";


//Rutas de views
import { Detail, Form, Home, Landing } from "./views/index";



function App() {
  const {pathname} = useLocation();//Es un hook
  // console.log(location);

  return (
    <div>
       {pathname !== "/" && <NavBar />}
       <hr/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </div>
  )
}

export default App;
