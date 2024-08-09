import { Routes, Route } from 'react-router-dom';


import Main from './pages/main';



function App() {
  return (
    <div>
      <Routes>
        {/* <Route></Route> */}
        <Route path="/" element={<Main />} />
        
      </Routes>
    </div>
  );
}

export default App;
