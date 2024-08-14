import { Routes, Route, useParams, BrowserRouter } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Formm from './pages/submit';
import React from 'react';

function App() {
  const params = useParams();

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Formm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
