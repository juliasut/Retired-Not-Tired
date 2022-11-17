import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useLogout } from './hooks/useLogout';
import { useAuthContext } from './hooks/useAuthContext';

//? Pages import
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Error from './pages/Page404/Page404';
import MobileNav from './components/MobileNav';
import Profile from './pages/Profile/Profile';
import Messages from './pages/Messages/Messages';
import Friends from './pages/Friends/Friends';
import DetailedActivity from './pages/DetailedActivity/DetailedActivity';
import CreateActivity from './pages/CreateActivity/CreateActivity';

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
            {user && <Route path="/" element={<Home />} />}
            {!user && <Route path="/login" element={<Login />} />}
            {!user && <Route path="/signup" element={<SignUp />} />}
            {user && (
              <Route
                path="/create-activity"
                element={<CreateActivity uid={user.uid} />}
              />
            )}

            {user && (
              <Route path="/activity-detail" element={<DetailedActivity />} />
            )}
            {user && <Route path="/profile" element={<Profile />} />}
            {user && <Route path="/messages" element={<Messages />} />}
            {user && <Route path="/friends" element={<Friends />} />}
            <Route path="*" element={<Error />} />
          </Routes>
          <MobileNav />
        </BrowserRouter>
      )}
      <MobileNav />
    </div>
  );
}

export default App;
