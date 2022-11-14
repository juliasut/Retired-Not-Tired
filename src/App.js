import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Error from './pages/Page404/Page404';
import { useLogout } from './hooks/useLogout';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { logout, isPending } = useLogout();
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <nav className="nav">
            <ul>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              {!user && (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to={'/signup'}>Signup</Link>
                  </li>
                </>
              )}
              {user && (
                <>
                  <li>
                    {!isPending && <Link onClick={logout}>Sign Out</Link>}
                    {isPending && <Link disabled>Logging Out...</Link>}
                  </li>
                  <li>
                    <h3>hello {user.displayName}</h3>{' '}
                  </li>
                </>
              )}
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
