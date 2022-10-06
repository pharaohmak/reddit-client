import axios from "axios";

const url = "https://www.reddit.com/";

export default function getSubreddits() {
  axios
    .get(`${url}subreddits.json`)
    .then((response) => {
      const subredditList = response.data.data.children.map(
        (el) => el.data.title
      );
      return subredditList;
    })
    .catch((error) => console.error(`Error: ${error}`));
}