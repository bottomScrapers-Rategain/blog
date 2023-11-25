import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import AdvertisingContext from "../Contexts/advertisingContext";
const Post = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const slug = currentUrl.split("/")[2];
  const { advertisingType, setAdvertisingType } =
    useContext(AdvertisingContext);

  const [ads, setAds] = useState([]);
  const [post, setPost] = useState({});
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const getPost = async (slug) => {
    try {
      const data = { slug: slug };
      const response = await axios.post("http://localhost:5000/get-post", data);
      if (response) {
        const res = response.data;
        setPost(res);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  const getAds = async () => {
    try {
      const response = null;
      if (advertisingType == "behavioral") {
        const data = { userId: "655b2d3e733ec08df58ed879" };
        response = await axios.post("http://localhost:5000/behaviourads", data);
      } else {
        const data = { postId: "655af9a90b14dd9a05aff470" };
        response = await axios.post(
          "http://localhost:5000/contextualads",
          data
        );
      }

      if (response) {
        const res = response.data;
        console.log(res);
        setAds(res.adList);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    getPost(slug);
    getAds();
  }, [slug]);



  return (
    <>
      <Navbar />
      <div className=" w-full flex flex-row gap-10">
        <div className="flex flex-col gap-6 w-3/12">
          {ads.map((item, index) => (
            <div key={index}>
              <button className="cursor-pointer  hover:bg-neutral-200 hover:brightness-75">
                <img
                  alt=""
                  src={item}
                />
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-8/12 p-10 gap-6 justify-center items-center">
          <div className="text-4xl font-semibold">{post.title}</div>
          <div
            className="text-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
          <div className="flex flex-col gap-4 self-start">
            <div className="text-2xl font-semibold text-neutral-700 justify-center items-center">
              Hit a Like if you liked the article
            </div>
            <div className="flex flex-row gap-4">
              <button
                onClick={() => {
                  setLike(true);
                  setDislike(false);
                }}
                className={`rounded-lg px-4 py-2 text-xl ${
                  like
                    ? "bg-blue-500 text-white"
                    : "border border-neutral-400 hover:bg-neutral-300"
                } `}
              >
                {like ? "Liked" : "Like"}
              </button>
              <button
                onClick={() => {
                  setLike(false);
                  setDislike(true);
                }}
                className={`rounded-lg px-4 py-2 text-xl ${
                  dislike
                    ? "bg-red-500 text-white"
                    : "border border-neutral-400 hover:bg-neutral-300"
                } `}
              >
                {dislike ? "Disliked" : "Dislike"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
