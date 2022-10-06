export const url = 'https://www.reddit.com';

export const getSubredditPosts = async (subreddit) => {
  const response = await fetch(`${url}${subreddit}.json`);
  const json = await response.json();

  return json.data.children.map((post) => post.data);
};

export const getSubreddits = async () => {
  const response = await fetch(`${url}/subreddits.json`);
  const json = await response.json();

  return json.data.children.map((subreddit) => subreddit.data);
};