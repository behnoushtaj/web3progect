const Ricebox = async () => {
  let data = await fetch("https://behnoushtaj.github.io/json3/db.json");
  let res = await data.json();
  let ricebox = `
    <div class="red-box">
    <h4> ${res.ricebox.h4}</h4>
    <h6> ${res.ricebox.h6} </h6>
  </div>
    `;
  document.querySelector(".ricebox").innerHTML = ricebox;
};
export default Ricebox;
