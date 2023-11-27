const Down = async () => {
  let data = await fetch("https://behnoushtaj.github.io/json3/db.json");
  let res = await data.json();
  let down = `
   
    <h5>${res.down.txt1}</h5>
    <h6>${res.down.txt2}</h6>
    <h6>
      <span>&#8756; </span>${res.down.txt3}<span> &#8756;</span>
    </h6>
   
    `;
  document.querySelector(".down").innerHTML = down;
};

export default Down;
