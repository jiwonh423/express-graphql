const postsModel = require("./posts.model");

module.exports = {
  Query: {
    posts: () => {
      return postsModel.getAllPosts();
    },
    post: (_, args) => {
      return postsModel, postsModel.getPostById(args.id);
    },
  },
};
