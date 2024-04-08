const commentModel = require("./comments.model");

module.exports = {
  Query: {
    comments: () => {
      return commentModel.getAllComments();
    },
    commentsByLikes: (_, args) => {
      return commentModel.getCommentsByLikes(args.minLikes);
    },
  },
};
