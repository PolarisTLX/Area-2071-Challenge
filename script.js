let nebula = document.getElementsByClassName('girl-nebula-img')[0];
let greyNebula = document.getElementsByClassName('grey-nebula')[0];
greyNebula.style.width = nebula.width + "px";
greyNebula.style.height = nebula.height + "px";
let nebText = document.getElementsByClassName('girl-nebula')[0];

let lounge = document.getElementsByClassName('lounge-img')[0];
let greyLounge = document.getElementsByClassName('grey-lounge')[0];
greyLounge.style.width = lounge.width + "px";
greyLounge.style.height = lounge.height + "px";
let loungeText = document.getElementsByClassName('lounge-verbage')[0];


window.addEventListener('scroll', event => {
  if (window.pageYOffset > 500) {
    // nebula.style.margin = "auto";
    nebula.className = "girl-nebula-img move-nebula";
    greyNebula.className = "grey-nebula move-grey-nebula";
    nebText.className = "girl-nebula move-neb-text";
  }

  if (window.pageYOffset > 1200) {
    // nebula.style.margin = "auto";
    lounge.className = "lounge-img move-lounge";
    greyLounge.className = "grey-lounge move-grey-lounge";
    loungeText.className = "lounge-verbage move-lounge-verbage";
  }
  // if (window.pageYOffset > 800) {
  //   nebula.style.margin = "auto";
  // }
});
