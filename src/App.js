import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import Avatar from './components/Avatar';
import UpdateProfile from './pages/MyAccount/UpdateProfile';
import DetailedActivity from './pages/DetailedActivity/DetailedActivity';
import CreateActivity from './pages/CreateActivity/CreateActivity';

function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <nav className="nav">
            <ul>
              {user && (
                <li>
                  <Avatar user={user} />
                </li>
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
              <Route
                path="/activity-detail/:id"
                element={<DetailedActivity />}
              />
            )}
            {user && (
              <Route path="/profile" element={<Profile user={user} />} />
            )}
            {user && <Route path="/messages" element={<Messages />} />}
            {user && <Route path="/friends" element={<Friends />} />}
            {user && (
              <Route
                path="/update-profile"
                element={<UpdateProfile user={user} />}
              />
            )}

            <Route path="*" element={<Error />} />
          </Routes>
          <MobileNav />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
