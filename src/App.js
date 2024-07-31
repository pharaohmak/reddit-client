import React, { useEffect, useState } from "react";
import Nav from "./Components/Nav/Nav";
import Subreddits from "./Components/Subreddits/Subreddits";
import Posts from "./Components/Posts/Posts";
import TEST from "./Components/TEST";
import axios from "axios";

const App = () => {
  const [subreddits, setSubreddits] = useState([]);
  const [posts, setPosts] = useState([]);
  const url = "https://www.reddit.com/";

  useEffect(() => {
    getSubreddits();
    getSubredditPosts('home'); // Call with 'home' as initial subreddit
  }, []);

  const getSubreddits = () => {
    axios
      .get(`${url}subreddits.json`)
      .then((response) => {
        const subredditList = response.data.data.children.map(
          (el) => el.data.title
        );
        setSubreddits(subredditList);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const getSubredditPosts = (subreddit) => {
    axios
      .get(`${url}/r/${subreddit}.json`)
      .then((response) => {
        const subredditPosts = response.data.data.children.map(
          (el) => el.data.title
        );
        setPosts(subredditPosts);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  return (
    <div className="container">
      <Nav className='nav'/>
      <br />
      <Subreddits className='subreddits' subreddits={subreddits} />
      <Posts className='posts' posts={posts}/>
      <br/>
      <TEST />
      <br/>
    </div>
  );
};

export default App;