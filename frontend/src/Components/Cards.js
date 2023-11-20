import React from 'react';
import Card from './Card';
const Cards = (props) => {
  const posts = props.posts;
  return (
    <div className="w-full px-40 flex flex-col gap-4">
      {posts.map((item,index) => (
        <Card key={index}  post={item} />
      ))}
    </div>
  );
};

export default Cards;
