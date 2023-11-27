const Rice = async () => {
  let data = await fetch("https://behnoushtaj.github.io/json3/db.json");
  let res = await data.json();
  let rice = `
    <img src="${res.rice.img}" />
    `;
  document.querySelector(".ricepic").innerHTML = rice;
};

export default Rice;
