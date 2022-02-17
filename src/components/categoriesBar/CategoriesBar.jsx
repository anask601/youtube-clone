import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategories,
} from "../../redux/actions/videos.action";
import "./_categoriesBar.scss";

const keywords = [
  "Cricket",
  "Football",
  "Coding",
  "React",
  "Angular",
  "Vue",
  "JavaScript",
  "TypeScript",
  "Comedy",
  "Hockey",
  "E-Sports",
  "Call of Duty",
  "News",
  "Sports",
  "CSS",
  "HTML",
  "PUBG",
  "HAHA",
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");

  const dispatch = useDispatch();

  const handleClick = (value) => {
    setActiveElement(value);
    if (value === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategories(value));
    }
  };

  return (
    <div className="categoriosBar">
      {keywords.map((value, i) => (
        <span
          onClick={() => handleClick(value)}
          className={activeElement === value ? "active" : ""}
          key={i}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
