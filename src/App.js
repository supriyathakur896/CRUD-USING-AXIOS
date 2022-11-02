import './App.css';
import { BrowserRouter, Routes,Route,} from 'react-router-dom';
import Read  from './Pages/Read';
import Create from './Pages/Create';
import Update from './Pages/Update';


function App() {
  return (
    <>
    <BrowserRouter>
      <Create/>
      <Read/>
      <Routes>
        <Route path= "/update" element={<Update/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
