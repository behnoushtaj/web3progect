const Side = async () => {
  let data = await fetch("https://behnoushtaj.github.io/json3/db.json");
  let res = await data.json();
  let side = `
      <h1>${res.side.title}</h1>
      <h3>${res.side.h3}</h3>
      <p>${res.side.content}</p>
      <div><a href="#">${res.side.lnktext}</a></div>
    `;
  document.querySelector(".side-text").innerHTML = side;
};

export default Side;
