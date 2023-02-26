import { Route, Routes } from "react-router-dom";
import PostList from "../post-list/PostList";
import Profile from "../profile/Profile";
import Search from "../search/Search";
import "./Content.css";

const Content = () => {
  return (
    <div className="Content">
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Content;
