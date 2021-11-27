import './App.css';
import Nav from './components/nav/Nav';
import Login from './pages/login-page/Login'
import HomePage from './pages/home-page/HomePage'
import CoursePage from './pages/course-page/CoursePage';
import Signup from './pages/signup-page/Signup';
import ExamPage from './pages/exam-page/ExamPage';
import PersonalInfo from './modals/personal-info/PersonalInfo'
import QuestionPage from './pages/question-page/QuestionPage';

import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {

  return (
    <div className=" min-h-screen">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/course/:courseID" element={<CoursePage />} />
          <Route path="/course/:courseID/exam/:examID" element={<ExamPage />} />
          <Route path="/course/:courseID/exam/:examID/question/:questionID" element={<QuestionPage />} />
          <Route path="/profile" element={<PersonalInfo />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
