import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/LoginPage/SignupPage";
import StartPage from "../pages/TestPage/StartPage";
import TestPage from "../pages/TestPage";
import ResultPage from "../pages/TestPage/ResultPage";
import MainPage from "../pages/MainPage/MainPage";
import NotiPage from "../pages/MainPage/NotiPage";
import FeedPage from "../pages/FeedPage/FeedPage";
import ActPage from "../pages/ActPage";
import PostPage from "../pages/ActPage/PostPage";
import ReportPage from "../pages/ActPage/ReportPage";
import NtzPage from "../pages/NtzPage/NtzPage";
import MyPage from "../pages/MyPage/MyPage";

import CalendarPage from "../pages/MainPage/CalendarPage";
import Subsidy from "../pages/NtzPage/Subsidy";
import MapPage from "../pages/NtzPage/MapPage";
import CompanyPage from "../pages/NtzPage/CompanyPage";

import PostDetail from "../pages/FeedPage/PostDetail";
import FriendsList from "../pages/MyPage/FriendsList";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route path="/welcome" element={<StartPage/>}/>
        <Route path="/test" element={<TestPage/>}/>
        <Route path="/result" element={<ResultPage/>}/>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/calendar" element={<CalendarPage />}></Route>
        <Route path="/notice" element={<NotiPage />}></Route>
        <Route path="/feed" element={<FeedPage />}></Route>
        <Route path="/feed/detail" element={<PostDetail />}></Route>
        <Route path="/act" element={<ActPage />}></Route>
        <Route path="/act/post" element={<PostPage />}></Route>
        <Route path="/act/report" element={<ReportPage />}></Route>
        <Route path="/netzero" element={<NtzPage />}></Route>
        <Route path="/netzero/subsidy" element={<Subsidy />}></Route>
        <Route path="/netzero/map" element={<MapPage />}></Route>
        <Route path="/netzero/company" element={<CompanyPage />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/mypage/friends" element={<FriendsList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
