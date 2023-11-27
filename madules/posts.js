const Posts = async () => {
  let data = await fetch("https://behnoushtaj.github.io/json3/db.json");
  let res = await data.json();
  let posts = res.posts.map((elem) => {
    return `
   
    <div class="p1">
    <img src="${elem.img}" />
    <div class="text">
      <h3>${elem.title}</h3>
      <p>
        ${elem.content}
      </p>
      <a href="#">  ${elem.link}</a>
    </div>
  </div>
  
           
       
      `;
  });
  document.querySelector(".post").innerHTML = posts.join();
};
export default Posts;
