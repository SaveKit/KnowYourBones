import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import LessonPage from "./pages/LessonPage";
// import Exercises from "./pages/Exercises";
// import Profile from "./pages/Profile";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/:lessonId" element={<LessonPage />} />
        {/* <Route path="/exercises" element={<Exercises />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;

