import './App.css';
import { Homepage } from './components/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/books/create' element={<Homepage />} />
          <Route path='/books/details/:id' element={<Homepage />} />
          <Route path='/books/edit/:id' element={<Homepage />} />
          <Route path='/books/delete/:id' element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
