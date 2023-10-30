import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Profile from "./pages/profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Layout from "./components/layout/Layout";
import Settings from "./pages/Settings";
import Article from "./pages/Article";
import Editor from "./pages/Editor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/editor" element={<Editor />}></Route>
        <Route path="/editor/:slug" element={<Editor />}></Route>
        <Route path="/profile/:username" element={<Profile />}></Route>
        <Route path="/profile/:username/favorites" element={<Profile />}></Route>
        <Route path="/article/:slug" element={<Article />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
