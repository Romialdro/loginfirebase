const postList = document.querySelector('.posts');

export const setupPosts = (data) => {
  if (data.length) {
    let html = '';
    data.forEach((doc) => {
      const post = doc.data();
      const li = `
      <li class="list-group-item post-list-item" id="post">
        <h5>${post.title}</h5>
        <p>${post.content}</p>
      </li>
    `;
      html += li;
    });
    postList.innerHTML = html;
  } else {
    postList.innerHTML = '<h4 class="text-center text-muted">Login to See Posts</h4>';
  }
};

