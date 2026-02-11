import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";

// Posts Routes
import Posts from "./pages/Posts";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";
import ViewPost from "./pages/ViewPost";

// Articles Routes
import Articles from "./pages/Articles";
import AddArticle from "./pages/AddArticle";
import EditArticle from "./pages/EditArticle";
import ViewArticle from "./pages/ViewArticle";

// Blog Routes
import Blog from "./pages/Blog";
import AddBlog from "./pages/Addblog";
import EditBlog from "./pages/Editblog";
import ViewBlog from "./pages/Viewblog";

// User Routes
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/Edituser";
import ViewUser from "./pages/ViewUser";

// Other Pages
import Community from "./pages/Community";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

// Context Providers
import { UserProvider } from "./context/Usercontext";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route element={<MainLayout />}>
            {/* Dashboard */}
            <Route path="/" element={<Dashboard />} />

            {/* Posts Routes */}
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/add" element={<AddPost />} />
            <Route path="/posts/view/:id" element={<ViewPost />} />
            <Route path="/posts/edit/:id" element={<EditPost />} />

            {/* Articles Routes */}
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/add" element={<AddArticle />} />
            <Route path="/articles/view/:id" element={<ViewArticle />} />
            <Route path="/articles/edit/:id" element={<EditArticle />} />

            {/* Blog Routes */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/add" element={<AddBlog />} />
            <Route path="/blog/view/:id" element={<ViewBlog />} />
            <Route path="/blog/edit/:id" element={<EditBlog />} />

            {/* Users Routes */}
            <Route path="/users" element={<Users />} />
            <Route path="/users/add" element={<AddUser />} />
            <Route path="/users/view/:id" element={<ViewUser />} />
            <Route path="/users/edit/:id" element={<EditUser />} />

            {/* Other Routes */}
            <Route path="/community" element={<Community />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
