const Rokn1 = async () => {
  let data = await fetch("https://behnoushtaj.github.io/json3/db.json");
  let res = await data.json();
  let rokn1 = `
    <div class="ro1">${res.rokn1.title} </div>
            <p>
            ${res.rokn1.content} 
            </p>
            <div class="links">
              <a href="#"> ${res.rokn1.lnk1} </a>
              <a href="#">  ${res.rokn1.lnk2} </a>
            </div>
    `;
  document.querySelector(".first-part").innerHTML = rokn1;
};

export default Rokn1;
