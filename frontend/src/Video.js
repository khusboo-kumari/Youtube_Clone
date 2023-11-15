import React, { useEffect, useState } from "react";
import Header from "./Header";
import avatar from "./Images/avatar.jpeg";

// import sv1 from "./Images/sv1.jpeg";
// import sv2 from "./Images/sv2.jpeg";
// import sv3 from "./Images/sv3.jpeg";
// import sv4 from "./Images/sv4.jpeg";
// import sv5 from "./Images/sv5.jpeg";

import { LiaThumbsDown, LiaThumbsUp, LiaDownloadSolid } from "react-icons/lia";
import { IoMdThumbsUp } from "react-icons/io";

import { PiShareFatLight } from "react-icons/pi";
import { Link } from "react-router-dom";

function SuggestedVideos(props) {
  let video = props.video;
  return (
    <>
      <div className="suggested-video">
        <div className="suggestion-image">
          <Link
            to={`/video?id=${video.videoId}`}
            onClick={() => {
              props.setVideoId(video.videoId);
              props.setVideo(video);
            }}
          >
            {/* <iframe src="https://www.youtube.com/embed/jKybt-F4Jto?si=GVS9tJbmh3Kf4agf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
            {/* <img class="suggestion-thumbnail" src={sv1}></img> */}
            <img
              class="suggestion-thumbnail"
              src={video.thumbnail}
              width={"230px"}
            />
          </Link>
        </div>

        <div className="suggestion-content">
          <div class="video-info">
            {/* <h7 class="track-title margin-0 video-info-title font-weight-bold">
              Abhijit Chavda - War, Bloodshed & Treasures{" "}
            </h7> */}
            <p class="track-title margin-0 video-info-title font-weight-bold">{video.title}</p>

            <p class="margin-0 smaller-fontsize">Ranveer Allahbadia</p>
            <p class="margin-0 smaller-fontsize">
              {video.views} views . 4 years ago
            </p>
          </div>
        </div>
      </div>

      {/* <div className="suggested-video">
        <div className="suggestion-image">
          <img src={sv2}></img>
        </div> */}
      {/* 
        <div className="suggestion-content">
          <div class="video-info">
            <h7 class="track-title margin-0 video-info-title font-weight-bold">
              UNKNOWN Facts Of Shiva On Earth
            </h7>
            <p class="margin-0 smaller-fontsize">Ranveer Allahbadia</p>
            <p class="margin-0 smaller-fontsize">230M views</p>
          </div>
        </div>
      </div> */}
      {/* 
      <div className="suggested-video">
        <div className="suggestion-image">
          <img src={sv3}></img>
        </div>

        <div className="suggestion-content">
          <div class="video-info">
            <h7 class="track-title margin-0 video-info-title font-weight-bold">
              Deepinder Goyal - Journey From Startup To IPO
            </h7>
            <p class="margin-0 smaller-fontsize">Ranveer Allahbadia</p>
            <p class="margin-0 smaller-fontsize">230M views</p>
          </div>
        </div>
      </div> */}

      {/* <div className="suggested-video">
        <div className="suggestion-image">
          <img src={sv4}></img>
        </div>

        <div className="suggestion-content">
          <div class="video-info">
            <h7 class="track-title margin-0 video-info-title font-weight-bold">
              Panel Discussion with MS DHONI, Tanmay Bhat
            </h7>
            <p class="margin-0 smaller-fontsize">Ranveer Allahbadia</p>
            <p class="margin-0 smaller-fontsize">230M views</p>
          </div>
        </div>
      </div> */}

      {/* <div className="suggested-video">
        <div className="suggestion-image">
          <img src={sv5}></img>
        </div>

        <div className="suggestion-content">
          <div class="video-info">
            <h7 class="track-title margin-0 video-info-title font-weight-bold">
              Honey Singh | Biggest Comeback Ever | AJIO Presents{" "}
            </h7>
            <p class="margin-0 smaller-fontsize">Ranveer Allahbadia</p>
            <p class="margin-0 smaller-fontsize">20M views</p>
          </div>
        </div>
      </div> */}
    </>
  );
}

function VideoInfo(props) {
  const video = props.currVideo;
  console.log(props);

  const [likes, setLikes] = useState(video.likes);

  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    alert("Video Link copied : " + text);
  };

  useEffect(() => {
    setLikes(video.likes);
  }, [video.likes]);

  const handleLikes = () => {
    let newLikes = JSON.parse(localStorage.getItem(`like_${video.id}`))
      ? JSON.parse(localStorage.getItem(`like_${video.id}`))
      : [];
    if (newLikes.includes(localStorage.getItem("email"))) {
      newLikes.pop(localStorage.getItem("email"));
    } else {
      newLikes.push(localStorage.getItem("email"));
    }

    localStorage.setItem(`like_${video.id}`, JSON.stringify(newLikes));

    const requesturl = `http://localhost:5500/video/${video._id}/like`;

    fetch(requesturl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.message);
        }
      })

      .then((data) => {
        if (data.success) {
          console.log("Success", data.video);
          setLikes(data.video.likes);
        } else {
          alert(data.message);
        }
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log("Likes", likes);

  return (
    <>
      <h5 className="video-name white">{video.title}</h5>
      <div className="video-details">
        <div className="channel-info  white">
          <img src={avatar} class="user-logo" />

          {/* <h6 className="channel-name">Zee Music Company</h6> */}

          <div className="channel-name">
            <h6 className="margin-0 white">Zee Music Company</h6>

            <p className="margin-0 subscribers white">467K subscribers</p>
          </div>
          <button className="subscribe">Subscribe</button>
        </div>

        {/* <button className="subscribe" id="subs">Subscribe</button>
        </div> */}

        {/* <div className="video-action-buttons"> */}

        <div className="video-action-buttons">
          <button className="white like-button"
            onClick={() => {
              handleLikes();
            }} 
          >
            {(JSON.parse(localStorage.getItem(`like_${video.id}`))
              ? JSON.parse(localStorage.getItem(`like_${video.id}`))
              : []
            ).includes(localStorage.getItem("email")) ? (
              <IoMdThumbsUp class="icon-bg" size={"1.4rem"} />
            ) : (
              <LiaThumbsUp class="icon-bg" size={"1.4rem"} />
            )}
            {likes} | <LiaThumbsDown class="icon-bg"size={"1.4rem"} />
          </button>

          <button className="white share-button" onClick={() => copyToClipboard(window.location.href)} >
            <PiShareFatLight className="icon-bg" size={"1.4rem"} />
            Share
          </button>
          <a
            href={`https://www.ssyoutube.com/watch?v=${video.videoId}`}
            target="_blank"
          >
            <button class="buttons white">
              <LiaDownloadSolid  className="icon-bg" size={"1.4rem"} />
              Download
            </button>
          </a>

          {/* <button className="white buttons"> 
                <LiaThumbsUp size = {'1.4rem'} />{video.likes} | <LiaThumbsDown size = {'1.4rem'}/>
               </button>

               <button className="white share-button"> Share 
               <PiShareFatLight size = {'1.4rem'}/>

               </button> */}

          {/* <button className="white buttons">
               <LiaDownloadSolid size = {'1.4rem'}/> Download

               </button> */}

          {/* <button className="white">Like</button>
          <button className="white">Share</button>
          <button className="white">Download</button>  */}
        </div>
      </div>

      <div className="video-desc white">
        <p>{video.views} views &nbsp; 1 year ago</p>
        <p>{video.description}</p>
      </div>
    </>
  );
}

function Video() {
  // const [seconds, setSeconds] = useState(10);
  // const targetTime = Math.floor((new Date()).getTime()/1000 + 10);

  // // when page renders
  // useEffect(()=>{
  //   const interval = setInterval(()=>{
  //     const currentTime = Math.floor((new Date()).getTime()/1000);
  //     const remainingTime = targetTime - currentTime;

  //     if(remainingTime >= 0) setSeconds(remainingTime);
  //   },1000)
  // },[]);

  const [currVideoId, setCurrentVideoId] = useState("");
  const [currVideo, setCurrVideo] = useState({});
  const [videos, setVideos] = useState([]);

  const url = "http://localhost:5500/videos";

  const getVideos = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      setVideos(json.videos);

      let currId = new URL(window.location).searchParams.get("id");

      for (let i = 0; i < json.videos.length; i++) {
        console.log(json.videos[i].videoId, " | ", currId);
        if (json.videos[i].videoId == currId) {
          console.log("matched");
          setCurrVideo(json.videos[i]);
          break;
        }
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    // Create a new URL object
    let address = new URL(window.location);

    // Get searchParameters property of the URL object
    let queryParameters = address.searchParams;

    // Retrieve specific query parameters
    let currentVideoId = queryParameters.get("id");

    setCurrentVideoId(currentVideoId);

    getVideos();
  }, []);

  // let videos = [1, 2, 3, 4, 5];
  return (
    <div>
      <Header />
      {/* <h2>Remaining Time : {seconds}</h2> */}
      <div className="video-main-page">
        <div className="video-frame">
          {/* <iframe className="iframe-video" src="https://www.youtube.com/embed/6Cb8eMxdMHo?si=Fzs6uWVXodru1Wr3?rel=0&mute=1&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          <iframe
            class="iframe-video"
            src={`https://www.youtube.com/embed/${currVideoId}?si=xO5lLF8pq1sSI1TE`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

          <VideoInfo currVideo={currVideo} />
        </div>

        <div className="suggestions">
          <h4 className="white">Suggested Videos : </h4>
          {videos.map((video) => {
            return (
              <SuggestedVideos
                video={video}
                setVideoId={setCurrentVideoId}
                setVideo={setCurrVideo}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Video;
