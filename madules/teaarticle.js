const Teaarticle = async () => {
  let data = await fetch(" https://behnoushtaj.github.io/json3/db.json");
  let res = await data.json();
  let teaarticle = `

   <div class="ro1">${res.teaarticle.title}</div>
            <p>
            ${res.teaarticle.content} 
            </p>
            <div class="links">
              <a href="#"> ${res.teaarticle.lnk1}</a>
            </div> 
   
    `;
  document.querySelector(".teap").innerHTML = teaarticle;
};

export default Teaarticle;
