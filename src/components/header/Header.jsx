import React from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import "./_header.scss";

const Header = ({ onToggleSidebar }) => {
  return (
    <div className="header">
      <FaBars className="header__menu" size={26} onClick={onToggleSidebar} />
      <img
        src="https://pngimg.com/uploads/youtube/youtube_PNG2.png"
        alt="youtube logo"
        className="header__logo"
      />

      <form>
        <input type="text" placeholder="search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="https://lh3.googleusercontent.com/a/AATXAJxYvJCN33RwA88hLeniPB5feCPEf4w1gXdbMcbh=s96-c"
          alt="profile pic"
        />
      </div>
    </div>
  );
};

export default Header;
