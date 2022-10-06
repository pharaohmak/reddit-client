import axios from "axios";

const url = "https://www.reddit.com/";

export default function getSubredditPosts(subreddit) {
  axios
    .get(`${url}/r/${subreddit}.json`)
    .then((response) => {
      const subredditPosts = response.data.data.children.map(
        (el) => el.data.title
      );
      return subredditPosts;
    })
    .catch((error) => console.error(`Error: ${error}`));
}