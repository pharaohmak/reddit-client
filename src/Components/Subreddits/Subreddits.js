import React from "react";
import './Subreddits.css';

export default function Subreddits(props) {
  // console.log(props.subreddits);
  // return(<div>{props.subreddits}</div>)

  const displaySubreddits = (props) => {
    const { subreddits } = props;

    if (subreddits.length > 0) {
      return subreddits.map((subreddit, index) => {
        console.log(subreddit);
        return (
            <h1 className="category" key={index}>{subreddit}</h1>
        );
      });
    } else {
      return <h3>Loading...</h3>;
    }
  };

  return (
    <div className='subreddit'>
      <h2>Subreddits</h2>
      {displaySubreddits(props)}
    </div>
  )
}