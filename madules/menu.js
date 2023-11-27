const Menu = async () => {
  let data = await fetch("https://behnoushtaj.github.io/json3/db.json");
  let res = await data.json();
  console.log(res);
  let menu = res.menu.map((elem) => {
    if (elem.dropdown.length === 0) {
      return ` <li>
      <a href="#" title="وب سایت شرکت گلستان">${elem.text}</a>
    </li>
   
   `;
    } else {
      return `<li class="about">
    <a href="#" title="درباره شرکت گلستان">${elem.text}</a>
    <div class="about">${elem.dropdown
      .map((menu) => {
        return `<div>
            <a href="#" title="معرفی شرکت گلستان">${menu.text}</a>
        </div>`;
      })
      .join(" ")}
    </div>
</li>`;
    }
  });
  document.querySelector(".menu-1").innerHTML = menu.join();
};
export default Menu;
