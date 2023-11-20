import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Navbar from "../Components/Navbar";
const Post = () => {
  
    const location = useLocation();
    const currentUrl = location.pathname;
    const slug = currentUrl.split('/')[2]
    
  const [post, setPost] = useState({});
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const getPost = async (slug) => {
    try {
      const data = { slug: slug };
      const response = await axios.post("http://localhost:5000/get-post",data);
      if (response) {
        const res = response.data
        setPost(res);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {

    getPost(slug);
  }, [slug]);

  useEffect(() => {

    console.log(post);
  }, [post]); // Add 'post' as a dependency to this useEffect

  return (
    <>
      <Navbar />
      <div className=" w-full py-10 px-40 flex flex-col gap-8 justify-center items-center">
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
    </>
  );
};

export default Post;