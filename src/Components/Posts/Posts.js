import React from "react";
import './Posts.css';

export default function Posts(props) {
  // console.log(props.posts);
  // return(<div>{props.posts}</div>)

  const displayPosts = (props) => {
    const { posts } = props;

    if (posts.length > 0) {
      return posts.map((post, index) => {
        console.log(post);
        return (
            <h1 className="postTitle" key={index}>{post}</h1>
        );
      });
    } else {
      return <h3>Loading...</h3>;
    }
  };

  return (
    <div className='post'>
      {displayPosts(props)}
    </div>
  )
};