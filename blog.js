/**
 * @typedef {{
 *  title: string,
 *  date: string,
 *  summary: string
 * }} Post
 */

/**
 * Defines the custom elements used for Post.
 */
export function generatePostId() {
  return crypto.randomUUID();
}

export const examplePost = {
  title: "Romeo and Juliet",
  date: "2022",
  summary:
    "Romeo and Juliet Summary. An age-old vendetta between two powerful families erupts into bloodshed. A group of masked Montagues risk further conflict by gatecrashing a Capulet party. A young lovesick Romeo Montague falls instantly in love with Juliet Capulet, who is due to marry her father's choice, the County Paris.",
};

/* Storage Layer
 * ============= */

/**
 * @returns the JSON map of posts from local storage.
 */
function loadPosts() {
  return JSON.parse(localStorage.getItem("posts")) || {};
}

/**
 * @param {{string: Post}} posts a JSON map of id->post to put into local storage.
 */
function storePosts(posts) {
  localStorage.setItem("posts", JSON.stringify(posts));
}

/* Crud Operations Layer
 * ===================== */

/**
 * (CREATE) Add a new post to the DB.
 * @param {Post} [Post] the post to be added to the DB.
 * @returns {String} the generated UUID for this book in the DB.
 */
export function insertPost(post) {
  const posts = loadPosts();
  const postId = generatePostId();

  posts[postId] = post;
  storePosts(posts);

  return postId;
}

/**
 * (READ) Read a specific post from the DB.
 * @param {string} [postId] the id of the post to look up.
 * @returns {Post | undefined} the post found, or undefined if not found.
 */
export function selectPost(postId) {
  const posts = loadPosts();

  return posts[postId];
}

/**
 * (READ) Return _all_ posts from the DB.
 * @returns {{str: Post}}
 */
export function selectAllPosts() {
  const posts = loadPosts();
  return posts;
}

/**
 * (UPDATE) Update a post in the DB.
 * @param {string} [postId] the id of the post to update.
 * @param {Post} [post] the new post data to replace the old one with.
 */
export function updatePost(postId, post) {
  const posts = loadPosts();

  posts[postId] = post;

  storePosts();
}

/**
 * (DELETE) Delete a post from the DB.
 * @param {string} [postId] the id of the post to delete.
 * @returns {bool} true if we deleted an element, false if not.
 */
export function deletePost(postId) {
  const posts = loadPosts();

  // If it's not there, just return false. If it is there, delete it.
  if (!(postId in posts)) return false;
  delete posts[postId];

  storePosts(posts);
  return true;
}

/**
 * Return the number of posts in the DB.
 * @returns
 */
export function countPosts() {
  const posts = loadPosts();
  return Object.keys(posts).length;
}

/**
 *
 * @param {Post} [post]
 */
export function renderPost(postId, post) {
  const template = document.getElementById("post-template");

  const postEl = template.content.cloneNode(true);

  console.log(postEl.children[0]);

  postEl.children[0].dataset.postId = postId;
  const titleH1 = postEl.querySelector("post-title > h1");

  titleH1.textContent = post.title;

  const dateP = postEl.querySelector("post-title > p");
  dateP.textContent = post.date;

  const summaryP = postEl.querySelector("post-summary > p");
  summaryP.textContent = post.summary;

  const editP = postEl.querySelector("post-edit > input");
  const deleteP = postEl.querySelector("post-delete > input");

  return postEl;
}

/**
 * Render a post and display the contents in `container`.
 * If a post with the same ID already exists, we remove it.
 *
 * Note: This function doesn't do anything to ensure sorting remains the same.
 *
 * @param {string} [[postId]
 * @param {Post|undefined} [post]
 * @param {HTMLElement} [container]
 */
export function redisplayPost(postId, post, container) {
  const postEl = renderPost(postId, post);

  const existingPost = container.querySelector(`[data-post-id="${postId}"]`);
  if (existingPost) {
    existingPost.remove();
  }

  // If passed a post, append it. We're not handling any sorting here!
  if (post) {
    container.appendChild(postEl);
  }
}

/**
 *
 * @param {*} container
 */
export function redisplayAllPosts(container) {
  const posts = selectAllPosts();

  for (const [id, post] of Object.entries(posts)) {
    redisplayPost(id, post, container);
  }
}
