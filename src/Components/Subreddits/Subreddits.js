import React from "react";
import './Subreddits.css';

export default function Subreddits({ subreddits }) {
  const displaySubreddits = () => {
    if (subreddits.length > 0) {
      return subreddits.map((subreddit, index) => (
        <h1 className="category" key={index}>{subreddit}</h1>
      ));
    } else {
      return <h3>Loading...</h3>;
    }
  };

  return (
    <div className='subreddit'>
      <h2>Subreddits</h2>
      {displaySubreddits()}
    </div>
  );
}