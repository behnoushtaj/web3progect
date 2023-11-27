const Videos = async () => {
  let data = await fetch("https://behnoushtaj.github.io/json3/db.json");
  let res = await data.json();
  let videos = res.videos.map((elem) => {
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
  document.querySelector(".pooost").innerHTML = videos.join();
};
export default Videos;
