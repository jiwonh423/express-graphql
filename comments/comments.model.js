const comments = [
  {
    id: "comment1",
    text: "It is first comment for post1",
    likes: 1,
  },
  {
    id: "comment2",
    text: "It is second comment for post1",
    likes: 3,
  },
];

function getAllComments() {
  return comments;
}

module.exports = {
  getAllComments,
};
