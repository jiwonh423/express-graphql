const commmentModel = require("./comments.model");

module.exports = {
  Query: {
    comments: () => {
      return commmentModel.getAllComments();
    },
  },
};
