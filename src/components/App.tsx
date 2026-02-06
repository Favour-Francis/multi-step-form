import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MultiStepForm from './MultiStepForm.tsx'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MultiStepForm />} />
          
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;
