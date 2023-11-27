const Footer = async () => {
  let data = await fetch("https://behnoushtaj.github.io/json3/db.json");
  let res = await data.json();
  let footer = res.footer.map((elem) => {
    return `
      <div class="p1">
      <img src="${elem.img}" alt="چای" />
      <h4>${elem.title}</h4>
      <a href="#">${elem.li1}</a>
      <a href="#"> ${elem.li2}  </a>
      <a href="#">${elem.li3}</a>
      <a href="#">${elem.li4}</a>
      <a href="#">${elem.li5}</a>
    </div>
    `;
  });
  document.querySelector(".end").innerHTML = footer.join();
};
export default Footer;
