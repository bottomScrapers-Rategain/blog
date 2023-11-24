import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

 const isAdminPanel = props.isAdminPanel;

  return (
    <div className="bg-blue-primary px-4 py-3 mb-5 flex flex-row justify-between items-center sticky top-0">
      <div className="text-4xl text-white font-semibold">MyBlog</div>
      <div className="flex flex-row gap-4 w-1/2 h-10">
        <input className="w-full h-full p-2 text-xl rounded" placeholder="Search for blogs..." type="text"></input>
        <button className="text-white bg-neutral-800 text-xl font-semibold h-full px-4 rounded">Search</button>
      </div>
      <div className="flex flex-row justify-center items-center gap-6 ">
        <ul className="flex flex-row gap-4 text-white text-xl">
           { !isAdminPanel && (<> <Link href=""><li className="px-2 py-1 border-b-2 border-b-white">Home</li></Link>
            <Link href=""><li className="px-2 py-1 ">Blogs</li></Link>
            <Link href=""><li className="px-2 py-1 ">Profile</li></Link>
           </>)}
           {isAdminPanel && <Link href="/admin/create"><li className="px-4 py-2 bg-neutral-700 rounded hover:bg-black duration-150 ease-in-out ">Create Post</li></Link>}
            <Link href=""> <li className="px-2 py-1 ">Logout</li></Link> 
        </ul>
      </div>

    </div>
  );
};

export default Navbar;