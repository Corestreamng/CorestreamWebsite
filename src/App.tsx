import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Posts";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";
import ViewPost from "./pages/ViewPost";
import Articles from "./pages/Articles";
import AddArticle from "./pages/AddArticle";
import EditArticle from "./pages/EditArticle";
import ViewArticle from "./pages/ViewArticle";
import Blog from "./pages/Blog";
import Addblog from "./pages/Addblog";
import Editblog from "./pages/Editblog";
import Viewblog from "./pages/Viewblog";
import Users from "./pages/Users";
import Community from "./pages/Community";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/add" element={<AddPost />} />
          <Route path="/posts/view/:id" element={<ViewPost />} />
          <Route path="/posts/edit/:id" element={<EditPost />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/add" element={<AddArticle />} />
          <Route path="/articles/view/:id" element={<ViewArticle />} />
          <Route path="/articles/edit/:id" element={<EditArticle />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/add" element={<Addblog />} />
          <Route path="/blog/view/:id" element={<Viewblog />} />
          <Route path="/blog/edit/:id" element={<Editblog />} />
          <Route path="/users" element={<Users />} />
          <Route path="/community" element={<Community />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
