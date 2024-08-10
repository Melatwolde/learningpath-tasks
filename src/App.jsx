import { Routes, Route } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Formm from './pages/submit';

function App() {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Formm register={register} handleSubmit={handleSubmit} />} />
      </Routes>
    </div>
  );
}

export default App;