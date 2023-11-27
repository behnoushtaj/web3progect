const Responsibility = async () => {
  let data = await fetch("https://behnoushtaj.github.io/json3/db.json");
  let res = await data.json();
  let responsibility = `
   
    <div class="res"> ${res.Responsibility.txt1}</div>
    <div class="text1">
      <span> ${res.Responsibility.txt2}</span>
      <span>  ${res.Responsibility.txt3}</span>
    </div>
    <div class="text2"> ${res.Responsibility.txt4} </div>

    <div class="img">
      <img src=" ${res.Responsibility.img}" alt="" />
    </div>
    <div class="line"></div>
    <div class="text-res">
      <h3> ${res.Responsibility.title}</h3>
      <p>
      ${res.Responsibility.content}
      </p>
      <a href="#"> ${res.Responsibility.link} </a>
    </div>
   
    `;
  document.querySelector(".Responsibility").innerHTML = responsibility;
};

export default Responsibility;
