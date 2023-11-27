const Recepe = async () => {
  let data = await fetch("https://behnoushtaj.github.io/json3/db.json");
  let res = await data.json();
  let recepe = `
   
    <span>${res.recepe.txt1} </span>
        <span> ${res.recepe.txt2}</span>
   
    `;
  document.querySelector(".recipe").innerHTML = recepe;
};

export default Recepe;
