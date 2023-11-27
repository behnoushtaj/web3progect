const Nut = async () => {
  let data = await fetch("https://behnoushtaj.github.io/json3/db.json");
  let res = await data.json();
  let nut = `
   
    <img src="${res.nut.img}" />
   
    `;
  document.querySelector(".nutic").innerHTML = nut;
};

export default Nut;
