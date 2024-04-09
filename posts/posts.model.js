const posts = [
  {
    id: "post1",
    title: "first post",
    description: "first post has own description",
    comments: [
      {
        id: "comment1",
        text: "It is first comment for post1",
        likes: 1,
      },
      {
        id: "comment2",
        text: "It  is second comment for post1",
        likes: 3,
      },
    ],
  },
  {
    id: "post2",
    title: "It is a second post",
    description: "It is a first description for the post2",
    comments: [],
  },
];

function getAllPosts() {
  return posts;
}

function getPostById(id) {
  return posts.find((post) => {
    return post.id === id;
  });
}

module.exports = {
  getAllPosts,
  getPostById,
};
