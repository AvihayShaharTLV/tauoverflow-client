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
import Popup from './modals/popups/Popup'
import { useEffect, useState } from 'react';

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupType, setPopupType] = useState("");
  const [contentUpdated, setContentUpdated] = useState(false);
  const [newSolutionUploaded, setNewSolutionUploaded] = useState(false);
  const [newExamUploaded, setNewExamUploaded] = useState(false);

  useEffect(() => {
    if (isPopupOpen) {
      document.getElementById("mainDiv").classList.add("filter");
      document.getElementById("mainDiv").classList.add("blur-sm");
      document.getElementById("mainDiv").classList.add("pointer-events-none");
    }
    else {
      document.getElementById("mainDiv").classList.remove("blur");
      document.getElementById("mainDiv").classList.remove("blur-sm");
      document.getElementById("mainDiv").classList.remove("pointer-events-none");
    }
  }, [isPopupOpen]);

  return (
    <div className="min-h-screen">
      <Nav />
      {isPopupOpen && <Popup setNewExamUploaded={setNewExamUploaded} newExamUploaded={newExamUploaded} setNewSolutionUploaded={setNewSolutionUploaded} newSolutionUploaded={newSolutionUploaded} contentUpdated={contentUpdated} setContentUpdated={setContentUpdated} popupType={popupType} setIsPopupOpen={setIsPopupOpen} />}
      <div id="mainDiv">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/course=:courseID" element={<CoursePage contentUpdated={contentUpdated} setPopupType={setPopupType} setIsPopupOpen={setIsPopupOpen} isPopupOpen={isPopupOpen} />} />
          <Route path="/course=:courseID/exam=:examID" element={<ExamPage newExamUploaded={newExamUploaded} newSolutionUploaded={newSolutionUploaded} contentUpdated={contentUpdated} setPopupType={setPopupType} setIsPopupOpen={setIsPopupOpen} isPopupOpen={isPopupOpen} />} />
          <Route path="/course=:courseID/exam=:examID/question=:questionID" element={<QuestionPage contentUpdated={contentUpdated} setPopupType={setPopupType} setIsPopupOpen={setIsPopupOpen} isPopupOpen={isPopupOpen} />} />
          <Route path="/profile" element={<PersonalInfo />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
