let nebula = document.getElementsByClassName('girl-nebula-img')[0];


window.addEventListener('scroll', event => {
  if (window.pageYOffset > 500) {
    nebula.style.margin = "auto";
  }
  // if (window.pageYOffset > 800) {
  //   nebula.style.margin = "auto";
  // }
});
