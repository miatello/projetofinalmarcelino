import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Home/Home';
import cadastrar from './cadastrar/Cadastrar';
import Detalhe from './Detalhe/detalhe.jsx'
import Destaque from './Destaque/destaq.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/todo' element={<Cadastrar />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/detalhe/:id' element={<Detalhe/>}></Route>
        <Route path='/destaque' element={<Destaque />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
