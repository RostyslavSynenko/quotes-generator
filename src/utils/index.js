export const getTweetUrl = ({ quote, author }) => {
  const tweetUrl = `https://twitter.com/intent/tweet?hashtags=quote&text="${quote}" ${author}`;

  return tweetUrl;
};

export const getTumblrUrl = ({ quote, author }) => {
  const tumblrUrl = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${author}&content=${quote}&canonicalUrl=https://www.tumblr.com/buttons&shareSource=tumblr_share_button`;

  return tumblrUrl;
};
