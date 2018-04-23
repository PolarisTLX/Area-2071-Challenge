let nebula = document.getElementsByClassName('girl-nebula-img')[0];
let greyNebula = document.getElementsByClassName('grey-nebula')[0];
greyNebula.style.width = nebula.width + "px";
greyNebula.style.height = nebula.height + "px";



window.addEventListener('scroll', event => {
  if (window.pageYOffset > 500) {
    // nebula.style.margin = "auto";
    nebula.className = "girl-nebula-img move-nebula";
    greyNebula.className = "grey-nebula move-grey-nebula";
  }
  // if (window.pageYOffset > 800) {
  //   nebula.style.margin = "auto";
  // }
});
