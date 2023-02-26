import { useState } from "react";
import "./Search.css";

const Search = () => {
  const [chip, setChip] = useState("");

  // All logics would be here

  return (
    <div className="Search">
      <form method="post">
        <div className="chip-container">
          <label
            className={chip === "user" ? " chips active" : "chips"}
            htmlFor="user"
            onClick={() => setChip("user")}
          >
            <input type="radio" name="searchIn" id="user" />
            <p>User</p>
          </label>
          <label
            className={chip === "post" ? "active chips" : "chips"}
            htmlFor="post"
            onClick={() => setChip("post")}
          >
            <input type="radio" name="searchIn" id="post" />
            <p>Post</p>
          </label>
        </div>
        <input
          type="text"
          name="text"
          id="searchText"
          placeholder="Type to search..."
        />
      </form>

    </div>
  );
};

export default Search;
