import { Navigate, Route, Routes } from 'react-router';
// import { LoginForm, SignupForm } from './components/Main';
import { MainPage, TodoPage } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<MainPage />} />
        <Route path="/signup" element={<MainPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
