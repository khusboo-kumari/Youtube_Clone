// rfce - react functional component

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import React, { useState } from "react";
import ytLogo from "./Images/utube.png";
import Signin from "./Signin";

import avtar from "./Images/avatar.jpeg";

import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { BiSolidVideoPlus } from "react-icons/bi";
import { BsFillMicFill } from "react-icons/bs";

import { BiLogOut } from "react-icons/bi";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Link, useSearchParams } from "react-router-dom";

function Header() {
  const [isUserLoggedIn, setIsloggedIn] = useState(
    localStorage.getItem("token") != null
  );

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("userId");
    localStorage.removeItem("name");

    setIsloggedIn(false);
  };

  console.log("Is logged in", isUserLoggedIn);

  return (
    <div>
      <div class="header">
        <div class="header-items">
          <div class="one">
            <AiOutlineMenu class="tools" />
          </div>
          <div class="two">
            <Link to={"/"}>
              <img id="yt-logo" src={ytLogo}></img>
            </Link>
          </div>
        </div>

        <div class="header-items white">
          <input placeholder="Search" class="header-search white"></input>
          <button class="search-button white">
            {" "}
            <AiOutlineSearch class="search-icon white" />
          </button>
          <div class="header-mic">
            <BsFillMicFill class="search-icon white" />
          </div>
        </div>

        {isUserLoggedIn ? (
          <div class="header-items header-profile">
            <Link to={"/upload"}>
              <IoMdNotificationsOutline class="tools-right" title="Upload video" />
              <BiSolidVideoPlus class="tools-right" title="Upload video" />
            </Link>
            <img src={avtar} class="user-logo white"></img>
            <p class="user-email margin-0">{localStorage.getItem("email")}</p>
            <BiLogOut
              class="tools-right"
              title="Logout"
              onClick={() => handleLogout()}
            />
          </div>
        ) : (
          <div class="header-items">
            <div class="header-tools">
              <IoMdNotificationsOutline className="tools" />
              <BiSolidVideoPlus className="tools" />
            </div>
            <Link to={"/Signin"}>
              <button class="signin-btn">Sign In</button>
            </Link> = <signin />
          </div>
        )}

        {/* <div class="header-items">
          <div class="header-tools">
            <IoMdNotificationsOutline className="tools" />
            <BiSolidVideoPlus className="tools" />
          </div>
          <Link to={"/Signin"}>
            <button class="signin-btn">Sign In</button>
          </Link>
          =
          <signin />
        </div> */}
      </div>
    </div>
  );
}

export default Header;

{
  /* Boksaaa code  */
}

{
  /* <button
            type="button"
            class="signin-btn"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Sign In
          </button>
        </div>

<div class="modal fade white" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog white" role="document">
    <div class="modal-content white">
      <div class="modal-header white">
        <h5 class="modal-title white" id="exampleModalLabel">Sign Up</h5>
        <button type="button" class="close white" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <Signin/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary white">Submit</button>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}

export default Header;
 */
}
