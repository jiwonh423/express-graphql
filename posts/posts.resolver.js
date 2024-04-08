const postsModel = require("./posts.model");

module.exports = {
  Query: {
    posts: () => {
      return postsModel.getAllPosts();
    },
  },
};
