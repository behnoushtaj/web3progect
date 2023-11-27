const Teabox = async () => {
  let data = await fetch("https://behnoushtaj.github.io/json3/db.json");
  let res = await data.json();
  let teabox = `
    <div class="red-box">
              <h4>${res.teabox.h4}</h4>
              <h6>${res.teabox.h6}</h6>
            </div>
   
    `;
  document.querySelector(".teabox").innerHTML = teabox;
};
export default Teabox;
