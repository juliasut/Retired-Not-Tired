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
import Activities from './pages/Activities/Activities';
import Landing from './pages/Landing/Landing';
function App() {
  const { user, authIsReady } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Routes>
            <Route
              path="/landing"
              element={!user ? <Landing /> : <Home user={user} />}
            />
            <Route
              path="/"
              element={user ? <Home user={user} /> : <Landing />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Home user={user} />}
            />
            <Route
              path="/signup"
              element={!user ? <SignUp /> : <Home user={user} />}
            />
            <Route
              path="/create-activity"
              element={user ? <CreateActivity uid={user.uid} /> : <Login />}
            />
            <Route
              path="/activities"
              element={user ? <Activities /> : <Login />}
            />
            {user && (
              <Route
                path="/activity-detail/:id"
                element={<DetailedActivity />}
              />
            )}
            <Route path="/profile" element={user ? <Profile /> : <Login />} />
            <Route path="/messages" element={user ? <Messages /> : <Login />} />
            <Route path="/friends" element={user ? <Friends /> : <Login />} />

            <Route
              path="/update-profile"
              element={user ? <UpdateProfile user={user} /> : <Login />}
            />
            <Route path="*" element={<Error />} />
          </Routes>
          <MobileNav />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
