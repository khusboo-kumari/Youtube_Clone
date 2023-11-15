import avatar from "./Images/avatar.jpeg";
import shradda from "./Images/shradda.jpg";
import ndtv from "./Images/ndtv.jpg";
import modi from "./Images/modi.jpg";
import tseries from "./Images/tseries.jpg";
import coke from "./Images/coke.jpg";

import { Link } from "react-router-dom";

import { AiFillHome } from "react-icons/ai";
import { LiaDownloadSolid } from "react-icons/lia";
import { BsFire } from "react-icons/bs";

import { MdOutlineSubscriptions, MdOutlineWatchLater } from "react-icons/md";
import { BiSolidVideos, BiHistory, BiUserPin } from "react-icons/bi";

import Header from "./Header";
import { useEffect, useState } from "react";

// import { GoHomeFill } from "react-icons/go";
// import thumbnail from "./Images/thumbnail.png";

function VideoGrid(props) {
  const video = props.video;
  return (
    <div class="thumbnail-container">
      <div class="thumbnail">
        <div class="video">
          <Link to={`/video?id=${video.videoId}`}>
            <img class="yt-pic" src={video.thumbnail} />
          </Link>
        </div>
        <div class="video-title">
          <div className="yt-channel-icon">
            <img src={avatar}></img>
          </div>
          <div class="video-info">
            <h4 class="track-title margin-0 ">{video.title} </h4>
            <p class="margin-0 smaller-fontsize">T-series</p>
            <p class="margin-0 smaller-fontsize">
              {video.views} views . 4 years ago
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  // let videos = [1,2,3,4,5,6,7,8,9,10,11,12]
  const [videos, setVideos] = useState([]);
  const url = "http://localhost:5500/videos";
  const getVideos = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      setVideos(json.videos);
    } catch (error) {
      console.log("Error", error);
    }
  };
  useEffect(() => {
    getVideos();
  }, []);

  return (
    <>
      <Header />
      <div class="main-section">
        <div class="main-left">
          <button class="yt-side-button">
            {" "}
            <AiFillHome class="icon" />{" "}
            <span class="side-button-label white">Home</span>
          </button>

          <button class="yt-side-button">
            <BiSolidVideos class="icon" />{" "}
            <span class="side-button-label white">Shorts</span>
          </button>

          <button class="yt-side-button">
            <MdOutlineSubscriptions class="icon" />{" "}
            <span class="side-button-label white">Subscriptions</span>
          </button>

          <hr class="white"></hr>

          <p class="white side-button-label bold">You &gt; </p>
          <button class="yt-side-button">
            <BiUserPin class="icon" />{" "}
            <span class="side-button-label white">Your Channel</span>
          </button>

          <button class="yt-side-button">
            <BiUserPin class="icon" />{" "}
            <span class="side-button-label white">Your Videos</span>
          </button>

          <button class="yt-side-button">
            <BsFire class="icon" />{" "}
            <span class="side-button-label white">Trending</span>
          </button>

          <button class="yt-side-button">
            <BiHistory class="icon" />{" "}
            <span class="side-button-label white">History</span>
          </button>
          <button class="yt-side-button">
            <MdOutlineWatchLater class="icon" />{" "}
            <span class="side-button-label white">Watch Later</span>
          </button>
          <button class="yt-side-button">
            <LiaDownloadSolid class="icon" />{" "}
            <span class="side-button-label white">Downloads</span>
          </button>

          <hr class="white"></hr>

          <h6 class="side-button-label white bold">Subscriptions &gt; </h6>

          <button class="yt-side-button">
            <img src={shradda} height={"30px"} width={"30px"}></img>
            <span class="side-channel-label white">Apna College</span>
          </button>

          <button class="yt-side-button">
            <img src={ndtv} height={"30px"} width={"30px"}></img>
            <span class="side-channel-label white">NDTV</span>
          </button>

          <button class="yt-side-button">
            <img src={modi} height={"30px"} width={"30px"}></img>
            <span class="side-channel-label white">Narendra Modi</span>
          </button>

          <button class="yt-side-button">
            <img src={tseries} height={"30px"} width={"30px"}></img>
            <span class="side-channel-label white">T-Series</span>
          </button>

          <button class="yt-side-button">
            <img src={coke} height={"30px"} width={"30px"}></img>
            <span class="side-channel-label white">Coke Studio</span>
          </button>
        </div>

        <div class="main-right">
          <div className="navbar-container">
            <div class="navbar">
              <div class="navbar-items white">All</div>
              <div class="navbar-items white">Bollywood Music</div>
              <div class="navbar-items white">Podcast</div>
              <div class="navbar-items white">Computer Programming</div>
              <div class="navbar-items white">Dance</div>
              <div class="navbar-items white">Live</div>
              <div class="navbar-items white">Live</div>
              <div class="navbar-items white">Vlog</div>
              <div class="navbar-items white">Populars</div>
              <div class="navbar-items white">Mixes</div>
              <div class="navbar-items white">Playlist</div>
              <div class="navbar-items white">Thoughts</div>
              <div class="navbar-items white">Mantras</div>
            </div>
          </div>

          {videos.map((video) => {
            return <VideoGrid video={video} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
