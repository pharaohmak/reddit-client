import React from "react";
import './Posts.css';

export default function Posts({ posts }) {
  const displayPosts = () => {
    if (posts.length > 0) {
      return posts.map((post, index) => (
        <h1 className="postTitle" key={index}>{post}</h1>
      ));
    } else {
      return <h3>Loading...</h3>;
    }
  };

  return (
    <div className='post'>
      {displayPosts()}
    </div>
  );
};