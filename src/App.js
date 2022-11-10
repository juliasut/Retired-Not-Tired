import './App.css';
// import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Error from './pages/Page404/Page404';
import { Logout } from './hooks/useLogout';

// const queryClient = new QueryClient();

function App() {
  const { logout } = Logout();
  return (
    // <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <div className="App">
        <nav className="nav">
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to={'/signup'}>Signup</Link>
            </li>
            <li>
              <Link onClick={logout}>Sign Out</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
    // <ReactQueryDevtools initialIsOpen={false} />
    // </QueryClientProvider>
  );
}

export default App;
