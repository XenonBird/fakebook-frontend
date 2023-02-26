import { Route, Routes } from "react-router-dom";
import PostList from "../post-list/PostList";
import "./Content.css";

const Content = () => {
    return (
        <div className="Content">
            <Routes>
                <Route path="/" element={<PostList />} />
                <Route path="/search" element={<h1>Search</h1>} />
                <Route path="/user" element={<h1>Profile</h1>} />
            </Routes>
        </div>
    );
};

export default Content;
