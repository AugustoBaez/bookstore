import './App.css';
import { Homepage } from './components/Homepage';
import CreateBooks from "./components/CreateBooks"
import ShowBooks from "./components/ShowBooks"
import EditBooks from "./components/EditBooks"
import DeleteBooks from "./components/DeleteBooks"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/books/create' element={<CreateBooks />} />
          <Route path='/books/details/:id' element={<ShowBooks />} />
          <Route path='/books/edit/:id' element={<EditBooks />} />
          <Route path='/books/delete/:id' element={<DeleteBooks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
