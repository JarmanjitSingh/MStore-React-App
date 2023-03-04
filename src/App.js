import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import PrivateRoute from './privateRoute/PrivateRoute';

function App() {
  const { isAuthenticated } = useSelector(state => state.root);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={localStorage.getItem('user') ? <Home /> : <Login />} />
        <Route
          exact
          path="/home"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
