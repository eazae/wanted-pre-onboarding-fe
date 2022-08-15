import { Route, Routes } from 'react-router';
import { MainPage, TodoPage } from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}

export default App;
