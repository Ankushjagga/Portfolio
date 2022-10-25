  const menu = document.getElementById("menu");
  const header = document.querySelector(".header");
  menu.addEventListener("click",()=>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('toggle');
  })
  window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        document.getElementById("top").style.display = "block";
        menu.classList.remove('fa-times');
        header.classList.remove('toggle');
    } else {
        document.getElementById("top").style.display = "none";
    }
}


