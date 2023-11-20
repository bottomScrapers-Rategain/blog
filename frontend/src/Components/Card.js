import React from "react";
import { Link } from "react-router-dom";
const Card = (props) => {
  const post = props.post;
  return (
    <div className=" w-full h-48 p-8 py-4 rounded bg-neutral-200 flex flex-row gap-4">
      {/* <img src={imgPath} className="w-3/12 h-auto object-cover" /> */}
      <Link to={`/post/${post.slug}`}>
      <div className="flex flex-col gap-2 items-start">
        <div className="text-4xl text-black font-semibold">{post.title}</div>
        <div className=" w-fulloverflow-ellipsis ">
          <p class="overflow-ellipsis overflow-hidden  text-md">
            Fred is inquisitive and creative, and always conjuring up ways to
            improve Binaryville. He's twice been awarded the highly coveted
            BinaryvilleMedallionOfHonorAndExcellentAward Fred is inquisitive and
            hello
          </p>
        </div>
        <div className="flex flex-row gap-4">
          
            <button className="text-white bg-neutral-800 text-lg font-semibold px-4 py-2 rounded">
              Read Post
            </button>
        
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Card;
