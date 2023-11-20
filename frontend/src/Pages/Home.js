import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cards from '../Components/Cards';
import Navbar from '../Components/Navbar';

const Home = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/get-all-posts');
        console.log(response.data);
          setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
  
    useEffect(() => {
      getPosts();
    }, []);
  
    console.log(posts); 
  return (
    <>
      <Navbar /> 
      <Cards posts={posts} />
    </>
  )
}

export default Home
