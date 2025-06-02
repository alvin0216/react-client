import { BrowserRouter, Routes, Route } from 'react-router';
import { LoginPage } from './pages/login';
import { RegisterPage } from './pages/register';
import { ResetPage } from './pages/reset';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset" element={<ResetPage />} />
        <Route path="*" element={<p>404</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
