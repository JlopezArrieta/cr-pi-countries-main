import './App.css'
import { Routes, Route } from "react-router-dom";
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Form from './views/Form/Form';
import Detail from './views/Detail/Detail';


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/create' element={<Form />} />
      </Routes>
    </div>
  )
}

export default App;
