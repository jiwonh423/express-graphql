module.exports = {
  Query: {
    comments: (parent) => {
      console.log("resolver funciton for comments executed");
      return parent.comments;
    },
  },
};
