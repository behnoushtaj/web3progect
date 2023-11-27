const Pastel = async () => {
  let data = await fetch("https://behnoushtaj.github.io/json3/db.json");
  let res = await data.json();
  let pastel = res.pastel.map((elem) => {
    return `
      
    <div class="p1">
            <img
              src="${elem.img}"
              alt="سرمایه انسانی"
            />
            <div>${elem.title}</div>
            <div class="line">
            </div>
            </div>
    `;
  });
  document.querySelector(".pastel").innerHTML = pastel.join();
};
export default Pastel;
