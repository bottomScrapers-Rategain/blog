import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdvertisingContext from "../Contexts/advertisingContext";
import UserContext from "../Contexts/userContext";

const DashboardSingleUser = (props) => {
  const [posts, setPosts] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]); // State to hold selected advertising types
  const { advertisingType, setAdvertisingType } = useContext(AdvertisingContext);
  const {uid,setUid} = useContext(UserContext);
  const [user,setUser] = useState(props.user);


  

  const getPosts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/get-all-posts");
      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const saveHandler = () => {
    // Get all checked checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const types = Array.from(checkboxes).map((checkbox) => checkbox.value);
    setSelectedTypes(types); // Set selected types to state
    setAdvertisingType(types); // Set selected types to context
    alert('Advertising Type Saved');
  };

  return (
    <>
      <div className="flex flex-col gap-2 w-5/12 text-white ">
        <div className="w-full flex flex-col gap-4 p-4 bg-dark-primary rounded-lg ">
          <div className="text-2xl font-semibold">
            Unique Identifier :{" "}
            <span className="text-lg font-normal">{uid}</span>
          </div>
          <div className="text-xl font-semibold">Select Type of Marketing</div>
          <div className="flex flex-row gap-4">
            <div className="flex flex-row justify-center items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                id="behavioral"
                name="behavioral"
                value="behavioral"
              />
              <label className="text-lg font-semibold" htmlFor="behavioral">
                Behavioral
              </label>
            </div>
            <div className="flex flex-row justify-center items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                id="contextual"
                name="contextual"
                value="contextual"
              />
              <label className="text-lg font-semibold" htmlFor="contextual">
                Contextual
              </label>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 rounded text-xl w-full px-4 py-1"
              onClick={saveHandler} // Call saveHandler function on button click
            >
              Save
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 p-4 bg-dark-primary rounded-lg ">
          <div className="text-4xl font-semibold">Blogs</div>
          <div className="flex flex-col justify-start items-start gap-1 p-2 divide-y divide-slate-300 overflow-y-scroll">
            {posts.map((item, index) => (
              <div key={index} className="text-lg w-full p-1 duration-150 ease-in-out hover:bg-blue-100">
                <Link to={`/post/${item.slug}`}>
                  <button className="text-blue-500 text-justify">{item.title}</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSingleUser;
