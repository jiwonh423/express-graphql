module.exports = {
  Query: {
    posts: (parent) => {
      console.log("resolver function for posts executed");
      return parent.posts;
    },
  },
};
